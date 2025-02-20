// Sélectionne le bouton du menu burger
const button = document.querySelector("#burger-icon");

// Sélectionne le menu de navigation qui s'affichera ou se cachera
const responsiveNav = document.querySelector(".navburger");

const firstRod = document.querySelector("#firstRod");

const secondRod = document.querySelector("#secondRod");

const lastRod = document.querySelector("#lastRod");

// Ajoute un écouteur d'événements sur le bouton burger
button.addEventListener("click", function() {
    // Ajoute ou enlève la classe "open" pour afficher/masquer le menu
    responsiveNav.classList.toggle("open");
    firstRod.classList.toggle("firstRod");
    secondRod.classList.toggle("secondRod");
    lastRod.classList.toggle("hiddenRod");
});