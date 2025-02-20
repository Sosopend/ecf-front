// Ajoute un événement de chargement de la page pour s'assurer que le contenu HTML est chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne le formulaire et l'élément d'erreur
    const form = document.querySelector("form");
    const erreur = document.getElementById("erreur");

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

        // Vérifie si les champs obligatoires sont remplis
        if (lastname === "" || firstname === "" || mail === "" || object === "" || message === "") {
            // Affiche un message d'erreur si les champs obligatoires ne sont pas remplis
            erreur.classList.remove("erreurCache");
            erreur.classList.add("erreurVisible");
            erreur.textContent = "Veuillez remplir tous les champs.";
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