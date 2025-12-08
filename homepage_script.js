
// Petit script pour ajouter une animation d'entrée douce au chargement
document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');
  main.style.opacity = '0';
  main.style.transform = 'translateY(20px)';
  main.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
  
  setTimeout(() => {
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
  }, 100);
});