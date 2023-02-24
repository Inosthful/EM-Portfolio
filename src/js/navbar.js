window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Si la position verticale de la page est supérieure à 20px, affichez le bouton
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Lorsque l'utilisateur clique sur le bouton, exécutez la fonction
document.getElementById("myBtn").addEventListener("click", function() {
  // Retourne en haut de la page en utilisant l'animation smooth scroll
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
});