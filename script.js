// Animation de texte "typed" pour l'accueil
document.addEventListener('DOMContentLoaded', function() {
  const text = "Bonjour, je m'appelle Chaïma BEN MAHFOUDH";
  let index = 0;

  function type() {
    document.getElementById('typed-text').textContent = text.slice(0, index++);
    if (index <= text.length) {
      setTimeout(type, 100);
    }
  }

  type();
});

// Animation de texte "typed" pour le contact
document.addEventListener('DOMContentLoaded', function() {
  const textContact = "Contactez-moi";
  let indexContact = 0;

  function typeContact() {
    document.getElementById('typed-text-contact').textContent = textContact.slice(0, indexContact++);
    if (indexContact <= textContact.length) {
      setTimeout(typeContact, 100);
    }
  }

  typeContact();
});

// Animation de texte "typed" pour bts
document.addEventListener('DOMContentLoaded', function() {
  const textBTS = "BTS SIO";
  let indexBTS = 0;

  function typeBTS() {
    document.getElementById('typed-text-bts').textContent = textBTS.slice(0, indexBTS++);
    if (indexBTS <= textBTS.length) {
      setTimeout(typeBTS, 100);
    }
  }

  typeBTS();
});

// Animation de texte "typed" pour stage
document.addEventListener('DOMContentLoaded', function() {
  const textStage = "Stage";
  let indexStage = 0;

  function typeStage() {
    document.getElementById('typed-text-stage').textContent = textStage.slice(0, indexStage++);
    if (indexStage <= textStage.length) {
      setTimeout(typeStage, 100);
    }
  }

  typeStage();
});
// Animation de texte "typed" pour veille
document.addEventListener('DOMContentLoaded', function() {
  const textVeille = "Veille Technologique";
  let indexVeille = 0;

  function typeVeille() {
    document.getElementById('typed-text-veille').textContent = textVeille.slice(0, indexVeille++);
    if (indexVeille <= textVeille.length) {
      setTimeout(typeVeille, 100);
    }
  }

  typeVeille();
});

// Animation de texte "typed" pour veille
document.addEventListener('DOMContentLoaded', function() {
  const textProjet1 = "Projet 1";
  let indexProjet1 = 0;

  function typeProjet1() {
    document.getElementById('typed-text-projet1').textContent = textProjet1.slice(0, indexProjet1++);
    if (indexProjet1 <= textProjet1.length) {
      setTimeout(typeProjet1, 100);
    }
  }

  typeProjet1();
});

// Animation des barres de compétences
document.addEventListener('DOMContentLoaded', function() {
  const skillLevels = document.querySelectorAll('.skill-level');
  const skillsSection = document.querySelector('#skills');

  function animateSkills() {
    skillLevels.forEach(skill => {
      const level = skill.getAttribute('data-skill-level');
      skill.style.width = '0'; // Réinitialiser la largeur
      setTimeout(() => {
        skill.style.width = level;
      }, 100);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkills();
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(skillsSection);
});

// Gestion de l'affichage du CV en grand
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('cvModal');
  const img = document.getElementById('cv');
  const modalImg = document.getElementById('cvFullImage');
  const span = document.getElementsByClassName('close')[0];

  img.onclick = function() {
    modal.style.display = 'block';
    modalImg.src = 'img/cv.png#zoom=100';
  }

  span.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
});

// Masquer le navbar au scroll vers le bas
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
});
