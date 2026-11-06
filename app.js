

const questions = [
"Quand quelqu'un dépasse mes limites, j'ai du mal à contenir ma réaction.",
"Avant de prendre une décision importante, j'imagine tout ce qui pourrait mal se passer.",
"Quand quelque chose me déçoit, j'ai tendance à perdre mon énergie et à me replier sur moi-même.",
"Je me sens responsable lorsque quelqu'un autour de moi ne va pas bien.",
"Quand je trouve une situation injuste, j'ai envie de remettre les choses à leur place.",
"Je repousse parfois un projet parce que j'ai peur de ne pas être à la hauteur.",
"Il m'arrive de repenser longtemps à ce que j'ai perdu ou à ce qui me manque.",
"Je culpabilise lorsque je prends du temps pour moi au lieu d'aider les autres.",
"Quand je suis contrariée, j'ai tendance à réagir avant d'avoir pris le temps de réfléchir.",
"J'ai besoin d'être rassurée avant de me lancer dans quelque chose de nouveau.",
"Quand je traverse une période difficile, j'ai du mal à retrouver mon enthousiasme.",
"Je repasse en boucle les moments où j'aurais pu faire davantage pour quelqu'un.",
"Je supporte difficilement qu'on ne respecte pas mes besoins ou mes limites.",
"Je doute de mes choix et j'anticipe souvent les conséquences négatives.",
"Quand je suis triste, j'ai tendance à croire que les choses ne s'arrangeront pas.",
"Je me sens mal lorsque je dois dire non, même quand je suis épuisée.",
"Je peux devenir très irritée lorsque j'ai l'impression qu'on profite de moi.",
"Je préfère parfois ne pas essayer plutôt que de risquer d'échouer.",
"J'ai besoin de temps pour digérer les déceptions et les changements.",
"Je me reproche facilement de ne pas en faire assez pour les autres."
];

const choices = [
"Jamais ou presque jamais",
"Parfois",
"Souvent",
"Très souvent"
];

const profiles = {
  colere: {
    name: "La Colère",
    short: "Colère",
    color: "#ed765f",
    image: "/colere.jpg",
    message: "Une limite a été franchie.",
    intro: "Elle débarque quand quelque chose te gonfle ou que tu as l'impression qu'on te prend pour une idiote. Ça peut être un sacré allié pour te faire respecter, mais attention à ne pas tout cramer sur ton passage !",
    role: "La colère vient signaler une injustice, une frustration ou un besoin non respecté. Elle te donne l'énergie nécessaire pour réagir et défendre ce qui compte pour toi. Attention, c'est une très mauvaise conseillère : elle t'invite à péter les plombs. C'est comme si tu te traînais avec un agent de sécurité prêt à tout péter à côté de toi !",
    welcome: "Commence par prendre un temps de pause et respirer avant d'agir. Ensuite, je t'invite à pratiquer une activité physique ou sportive pour te défouler. La colère arrive avec une charge d'énergie pour défendre ton terrain, un peu comme un taureau dans une arène ! Enfin, prends le temps d'identifier ce qui t'a vraiment agacée ou énervée, plutôt que de te laisser emporter par la pulsion du moment."
  },

  peur: {
    name: "La Peur",
    short: "Peur",
    color: "#a987ce",
    image: "/peur.jpg",
    message: "J'ai besoin de me sentir en sécurité.",
    intro: "Clairement, elle aime bien imaginer 48 scénarios catastrophes avant même que tu aies commencé quoi que ce soit. Elle a un abonnement illimité à Netflix, mais uniquement pour les films d'horreur dont tu es l'héroïne !",
    role: "La peur, c'est ton système d'alarme interne. Elle est là pour te protéger et t'alerter d'un éventuel danger. Sauf que parfois, l'alarme sonne alors qu'il n'y a pas de réel danger. Attention, c'est une très mauvaise conseillère : elle te limite dans tes choix et te submerge de doutes. C'est comme si tu avais le fisc sur le dos, qui te réclame des justificatifs pour tout !",
    welcome: "Très souvent, lorsque la peur se déclenche, tu as besoin de comprendre ce qui se passe, de chercher des explications et de mettre les choses au clair. Alors, avant de céder à la panique, reconnecte-toi à ton cerveau rationnel. Respire profondément et pose-toi les bonnes questions : qu'est-ce que je sais réellement de cette situation ? De quelles connaissances ai-je besoin pour avancer sereinement ? Qu'est-ce qui relève des faits et qu'est-ce qui relève de mes scénarios catastrophes ? L'objectif n'est pas de faire taire ta peur, mais de lui montrer que tu peux avancer avec elle sans lui laisser les commandes."
  },

  tristesse: {
    name: "La Tristesse",
    short: "Tristesse",
    color: "#78a7df",
    image: "/tristesse.jpg",
    message: "J'ai besoin de temps pour accueillir ce que j'ai perdu ou ce qui me manque.",
    intro: "Elle débarque quand quelque chose te manque, te déçoit ou te fait mal. Et en fait, tu n'es pas obligée de faire semblant que tout va bien quand tu es triste. Ça fait partie de la vie, c'est tout à fait normal.",
    role: "La tristesse est une émotion qui ralentit. Elle t'invite à reconnaître ta peine, à faire une pause et à prendre soin de toi. Attention, la tristesse n'est pas une très bonne conseillère non plus. C'est comme ce colocataire qui s'installe chez toi, ne paie pas son loyer et te convainc que tu ne sortiras plus jamais de ton canapé !",
    welcome: "Quand la tristesse débarque, considère-toi comme une reine ou une princesse. Chouchoute-toi ! Fais des choses qui te font du bien, appelle cette amie qui te fait rire, autorise-toi un petit plaisir, côté nourriture ou vêtements. Et surtout, prends le temps de ralentir et de te faire du bien. Tu n'as pas besoin de régler toute ta vie aujourd'hui. Parfois, une journée sous un plaid et un bon repas, c'est déjà un très bon programme."
  },

  culpabilite: {
    name: "La Culpabilité",
    short: "Culpabilité",
    color: "#e6ad54",
    image: "/culpabilite.jpg",
    message: "J'ai besoin de vérifier si j'ai agi en accord avec mes valeurs.",
    intro: "La culpabilité, elle adore te rappeler que t'aurais pu appeler, faire ci, faire ça, aider, répondre, anticiper… Bref, tout faire comme si t'avais huit bras !",
    role: "Elle peut t'aider à reconnaître une erreur et à réparer une situation. Mais attention, ce n'est pas un abonnement à vie ! T'as pas à payer ta culpabilité éternellement. Quand elle devient excessive, elle te pousse à être responsable de tout, même de ce qui ne dépend pas de toi. C'est comme si tu traînais avec un enfant de trois ans accro aux bonbons qui t'en réclame toute la journée. À un moment donné, bah… on stop !",
    welcome: "Déjà, commence par lâcher prise. Tu n'es pas responsable du bonheur ou du malheur de tout le monde. Sinon, il va falloir m'expliquer quelle est ton identité : tu serais Dieu ? Ça arrive à tout le monde de blesser ou de causer du tort aux autres. Tu peux reconnaître tes erreurs et chercher à réparer, mais tu n'es pas responsable des émotions des autres. Tu as le droit de ne pas satisfaire tout le monde, de dire non et de faire des erreurs. Alors, autorise-toi à relâcher ce poids et surtout, à te traiter avec bienveillance. Et si tu remplaçais la culpabilité par un peu d'amour pour toi ?"
  }
};

const groups = {
  colere: [0, 4, 8, 12, 16],
  peur: [1, 5, 9, 13, 17],
  tristesse: [2, 6, 10, 14, 18],
  culpabilite: [3, 7, 11, 15, 19]
};

const state = {
  index: 0,
  answers: Array(20).fill(null),
  lead: null,
  scores: null
};

const $ = id => document.getElementById(id);
const screens = ["welcome", "quiz", "lead", "results"];

function show(id) {
  screens.forEach(s => $(s).classList.toggle("active", s === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const i = state.index;

  $("question-count").textContent = `Question ${i + 1} sur 20`;
  $("progress-percent").textContent = `${Math.round((i + 1) / 20 * 100)}%`;
  $("progress-bar").style.width = `${(i + 1) / 20 * 100}%`;
  $("question-number").textContent = `${i + 1}.`;
  $("question-text").textContent = questions[i];
  $("answers").innerHTML = "";

  choices.forEach((choice, value) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "answer" + (state.answers[i] === value ? " selected" : "");
    b.textContent = choice;
    b.setAttribute("aria-pressed", state.answers[i] === value ? "true" : "false");

    b.addEventListener("click", () => {
      state.answers[i] = value;
      renderQuestion();
    });

    $("answers").appendChild(b);
  });

  $("previous-btn").style.visibility = i === 0 ? "hidden" : "visible";
  $("next-btn").textContent = i === 19 ? "Terminer →" : "Suivant →";
  $("next-btn").disabled = state.answers[i] === null;
}

function calculate() {
  const scores = {};

  Object.entries(groups).forEach(([key, indices]) => {
    scores[key] = indices.reduce((sum, i) => sum + state.answers[i], 0);
  });

  return scores;
}

function getDominants(scores) {
  const max = Math.max(...Object.values(scores));
  return Object.keys(scores).filter(k => scores[k] === max);
}

function renderResults() {
  const scores = state.scores = calculate();
  const dominants = getDominants(scores);
  const ordered = Object.keys(profiles).sort((a, b) => scores[b] - scores[a]);

  $("result-intro").textContent = `Bravo ${state.lead.firstName}, tu as pris quelques minutes pour écouter ce qui se passe à l'intérieur. Voici ce que tes réponses révèlent.`;

  $("score-list").innerHTML = "";

  ordered.forEach(key => {
    const p = profiles[key];
    const row = document.createElement("div");
    row.className = "score-row";

    row.innerHTML = `<span>${p.short}</span><div class="score-track"><div class="score-fill" style="width:${scores[key] / 15 * 100}%;background:${p.color}"></div></div><span class="score-value">${scores[key]} / 15</span>`;

    $("score-list").appendChild(row);
  });

  $("dominant-title").textContent = dominants.map(k => profiles[k].name).join(" et ");

  $("dominant-copy").textContent = dominants.length === 1
    ? `Ton score le plus élevé est celui de ${profiles[dominants[0]].name.toLowerCase()}. Cette émotion semble prendre davantage de place dans tes réponses aujourd'hui. Elle mérite qu'on écoute le message qu'elle essaie de te transmettre.`
    : `Tu as plusieurs émotions à égalité : ${dominants.map(k => profiles[k].name.toLowerCase()).join(" et ")}. Elles semblent occuper une place importante dans tes réponses. Tu peux explorer chacune d'elles, sans chercher à en faire ta seule étiquette.`;

  $("profile-cards").innerHTML = "";

  ordered.forEach(key => {
    const p = profiles[key];
    const card = document.createElement("article");
    card.className = "profile-card";

    card.innerHTML = `<img src="${p.image}" alt="Illustration de ${p.name}"><div class="profile-body"><h2>${p.name}</h2><h3>Son message</h3><p>« ${p.message} »</p><h3>Elle débarque quand…</h3><p>${p.intro}</p><h3>Ce qu'elle essaie de te dire</h3><p>${p.role}</p><h3>Comment l'accueillir ?</h3><p>${p.welcome}</p></div>`;

    $("profile-cards").appendChild(card);
  });
}

$("start-btn").addEventListener("click", () => {
  state.index = 0;
  renderQuestion();
  show("quiz");
});

$("previous-btn").addEventListener("click", () => {
  if (state.index > 0) {
    state.index--;
    renderQuestion();
  }
});

$("next-btn").addEventListener("click", () => {
  if (state.answers[state.index] === null) return;

  if (state.index < 19) {
    state.index++;
    renderQuestion();
  } else {
    show("lead");
  }
});

$("lead-form").addEventListener("submit", async e => {
  e.preventDefault();

  const form = e.currentTarget;
  const fd = new FormData(form);

  const lead = {
    firstName: String(fd.get("firstName")).trim(),
    lastName: String(fd.get("lastName")).trim(),
    email: String(fd.get("email")).trim()
  };

  if (!form.reportValidity()) return;
  if (!fd.get("consent")) return;

  state.lead = lead;

  const button = $("submit-lead");
  const error = $("form-error");

  button.disabled = true;
  button.textContent = "Un instant…";
  error.textContent = "";

  try {
    const response = await fetch("/.netlify/functions/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...lead,
        consent: fd.get("consent") === "on",
        scores: calculate(),
        dominant: getDominants(calculate()).map(k => profiles[k].short)
      })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "L'inscription n'a pas pu être enregistrée. Réessaie dans un instant.");
    }

    renderResults();
    show("results");

  } catch (err) {
    error.textContent = err.message || "Une erreur est survenue. Réessaie.";

  } finally {
    button.disabled = false;
    button.textContent = "Découvrir mon résultat →";
  }
});

$("restart-btn").addEventListener("click", () => {
  state.index = 0;
  state.answers = Array(20).fill(null);
  state.lead = null;
  state.scores = null;

  $("lead-form").reset();

  renderQuestion();
  show("welcome");
});

$("year").textContent = new Date().getFullYear();
