exports.handler = async function(event) {
  const headers = {
    "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json"
  };
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers, body: "" };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ message: "Méthode non autorisée." }) };

  const apiKey = process.env.MAILERLITE_API_KEY;
  if (!apiKey) return { statusCode: 503, headers, body: JSON.stringify({ message: "La connexion MailerLite n'est pas encore configurée." }) };

  try {
    const body = JSON.parse(event.body || "{}");
    const firstName = String(body.firstName || "").trim().slice(0, 80);
    const lastName = String(body.lastName || "").trim().slice(0, 80);
    const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
    if (!firstName || !lastName || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.consent !== true) {
      return { statusCode: 400, headers, body: JSON.stringify({ message: "Vérifie ton prénom, ton nom et ton adresse e-mail." }) };
    }

    const fields = { name: firstName, last_name: lastName };
    const payload = { email, fields };
    // Add the subscriber to a general audience group and to each dominant-emotion group.
    const groups = new Set();
    if (process.env.MAILERLITE_GROUP_ID) groups.add(process.env.MAILERLITE_GROUP_ID);
    const dominantKeys = Array.isArray(body.dominant) ? body.dominant : [];
    const groupEnvByEmotion = {
      "Colère": "MAILERLITE_GROUP_COLERE_ID",
      "Peur": "MAILERLITE_GROUP_PEUR_ID",
      "Tristesse": "MAILERLITE_GROUP_TRISTESSE_ID",
      "Culpabilité": "MAILERLITE_GROUP_CULPABILITE_ID"
    };
    for (const emotion of dominantKeys) {
      const envName = groupEnvByEmotion[emotion];
      if (envName && process.env[envName]) groups.add(process.env[envName]);
    }
    if (groups.size) payload.groups = Array.from(groups);

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: { "Authorization": `Bearer ${apiKey}`, "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error("MailerLite API error:", response.status, detail.slice(0, 500));
      return { statusCode: 502, headers, body: JSON.stringify({ message: "MailerLite n'a pas pu enregistrer ton inscription. Réessaie plus tard." }) };
    }
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  } catch (error) {
    console.error("Subscribe function error:", error);
    return { statusCode: 400, headers, body: JSON.stringify({ message: "La demande n'a pas pu être traitée." }) };
  }
};
