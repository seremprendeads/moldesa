// Menú móvil hamburguesa
function inicializarMenuHamburguesa() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    // Limpiar eventos anteriores para evitar duplicados
    menuToggle.removeEventListener('click', toggleMenu);
    
    function toggleMenu() {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar menú al hacer clic en un enlace
    const enlaces = navLinks.querySelectorAll('a');
    enlaces.forEach(enlace => {
      enlace.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    console.log('Menú hamburguesa inicializado correctamente');
  } else {
    console.warn('No se encontraron elementos del menú hamburguesa');
  }
}

// Si el DOM ya está cargado, inicializar inmediatamente
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarMenuHamburguesa);
} else {
  inicializarMenuHamburguesa();
}
