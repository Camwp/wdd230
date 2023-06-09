document.addEventListener('DOMContentLoaded', function() {
    var menu = document.querySelector('nav ul.menu');
    var hamburger = document.querySelector('.hamburger-menu');
  
    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  });