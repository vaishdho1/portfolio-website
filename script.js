document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const container = document.querySelector('.header-bar');
  
    menuToggle.addEventListener('click', function () {
      container.classList.toggle('expanded');
    });
  });
