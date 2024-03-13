document.addEventListener('DOMContentLoaded', function(){
    const text = "Bonjour, je m'appelle Chaïma Ben Mahfoudh"; // Remplacez ceci par le texte que vous voulez afficher
    let index = 0;
  
    function type() {
      document.getElementById('typed-text').textContent = text.slice(0, index++);
      if (index <= text.length) {
        setTimeout(type, 100); // Modifiez la vitesse de frappe ici (100 représente 100 millisecondes)
      }
    }
  
    type();
  });

  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Changer 50 selon la position où vous voulez masquer la barre de navigation
        navbar.style.top = "-50px"; // Changer -50 selon la hauteur de votre barre de navigation
    } else {
        navbar.style.top = "0";
    }
});

  