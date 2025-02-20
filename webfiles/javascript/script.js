// Ajoute un événement de chargement de la page pour s'assurer que le contenu HTML est chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne le formulaire et l'élément d'erreur
    const form = document.querySelector("form");
    const erreur = document.getElementById("erreur");

    // Définition des Regex pour les vérifications
    const regexNomPrenom = /^[a-zA-ZÀ-ÿ]{2,50}$/;
    const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexObjectMessage = /^.{3,250}$/;

    // Ajoute un événement de soumission au formulaire
    form.addEventListener("submit", function (event) {
        // Empêche la soumission du formulaire par défaut pour traiter les données manuellement
        event.preventDefault();

        // Récupère les valeurs des champs du formulaire
        const lastname = document.getElementById("lastName").value;
        const firstname = document.getElementById("firstName").value;
        const mail = document.getElementById("mail").value;
        const object = document.getElementById("object").value;
        const message = document.getElementById("message").value;
        const agreement = document.getElementById("agreed").checked;

        // Vérifie si les champs obligatoires sont remplis et correspondent aux Regex
        if (!regexNomPrenom.test(lastname)) {
            // Affiche un message d'erreur si le nom ne correspond pas au Regex
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "Le nom doit contenir entre 2 et 50 caractères et être exclusivement alphabétique.";
        } else if (!regexNomPrenom.test(firstname)) {
            // Affiche un message d'erreur si le prénom ne correspond pas au Regex
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "Le prénom doit contenir entre 2 et 50 caractères et être exclusivement alphabétique.";
        } else if (!regexMail.test(mail)) {
            // Affiche un message d'erreur si le mail ne correspond pas au Regex
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "L'adresse e-mail doit être au format valide.";
        } else if (!regexObjectMessage.test(object)) {
            // Affiche un message d'erreur si l'objet ne correspond pas au Regex
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "L'objet doit contenir entre 3 et 250 caractères.";
        } else if (!regexObjectMessage.test(message)) {
            // Affiche un message d'erreur si le message ne correspond pas au Regex
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "Le message doit contenir entre 3 et 250 caractères.";
        } else if (!agreement) {
            // Affiche un message d'erreur si l'utilisateur n'a pas accepté les mentions légales
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "Veuillez accepter les mentions légales.";
        } else {
            // Cache le message d'erreur si les champs sont remplis correctement
            erreur.classList.remove("erreurVisible");
            erreur.classList.add("erreurCache");
            // Affiche un message de confirmation de soumission du formulaire
            alert("Formulaire soumis avec succès !");
            // Réinitialise les champs du formulaire
            form.reset();
        }
    });
});