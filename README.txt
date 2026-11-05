# Itado Coaching — Quel est ton pote de galère émotionnel ?

Mini-site statique prêt à être déployé sur Netlify.

## Contenu
- Accueil et questionnaire de 20 questions
- Calcul des scores (4 émotions, 0 à 15 points)
- Capture prénom, nom et e-mail avant l'affichage des résultats
- Affichage des quatre profils, avec les scores et les conseils
- Logo Itado et illustrations BD intégrés

## Déploiement Netlify
1. Décompressez le ZIP.
2. Déposez le dossier `itado_pote_galere` dans un dépôt GitHub (ou importez-le dans Netlify).
3. Dans Netlify, ouvrez **Site configuration → Environment variables** et ajoutez :
   - `MAILERLITE_API_KEY` : votre clé API MailerLite (ne jamais la mettre dans le code du navigateur).
   - `MAILERLITE_GROUP_ID` : (facultatif) l'identifiant d'un groupe général pour tous les contacts.
   - `MAILERLITE_GROUP_COLERE_ID` : (facultatif) l'identifiant du groupe « Colère ».
   - `MAILERLITE_GROUP_PEUR_ID` : (facultatif) l'identifiant du groupe « Peur ».
   - `MAILERLITE_GROUP_TRISTESSE_ID` : (facultatif) l'identifiant du groupe « Tristesse ».
   - `MAILERLITE_GROUP_CULPABILITE_ID` : (facultatif) l'identifiant du groupe « Culpabilité ».
   - `ALLOWED_ORIGIN` : (facultatif) l'URL du site, par exemple `https://mon-test.netlify.app`.
4. Déployez le site. Netlify détectera la fonction `netlify/functions/subscribe.js`.

## MailerLite
La fonction ajoute le prénom et le nom dans les champs standards `name` et `last_name`, ainsi que l'e-mail. Les variables de groupes sont facultatives : si vous les renseignez, le contact rejoint le groupe général et le ou les groupes correspondant(s) à son/ ses profil(s) dominant(s). En cas d'égalité, il rejoint plusieurs groupes émotionnels.

Le consentement à recevoir les communications marketing est demandé dans le formulaire. Vérifiez et adaptez le lien de politique de confidentialité avant publication. Il est recommandé de configurer le double opt-in et les mentions légales/confidentialité dans MailerLite et sur le site.

## À finaliser avant publication
- Ajouter la clé API et éventuellement l'ID du groupe MailerLite dans Netlify.
- Remplacer le lien de confidentialité provisoire par l'URL de votre politique de confidentialité.
- Faire un test réel d'inscription sur un site Netlify de préproduction.
- Vérifier le contenu du test, les textes des profils et la conformité RGPD avec vos mentions légales.

## Note sur les profils
Les scores sont calculés à partir des réponses choisies. En cas d'égalité au score le plus élevé, plusieurs profils dominants sont affichés. Le test est présenté comme un outil de réflexion personnelle et non comme un diagnostic.
