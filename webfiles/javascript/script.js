const button = document.querySelector("#burger-icon"); // Permet de sélectionner le bouton burger et de le stocker dans la variable button
const responsiveNav = document.querySelector(".navburger"); // Permet de sélectionner le corps du burger-menu et de le stocker dans la variable responsiveNav

button.addEventListener("click", function() { // Permet d'ajouter un événement au bouton burger (ici le click)
  responsiveNav.classList.toggle("hidden"); // Permet d'ajouter ou retirer la classe hidden à responsiveNav lorsque le bouton est cliqué
});