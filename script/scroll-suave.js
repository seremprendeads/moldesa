// Scroll suave para enlaces internos
function inicializarScrollSuave() {
  const enlaces = document.querySelectorAll('a[href^="#"]');
  
  if (enlaces.length > 0) {
    enlaces.forEach(enlace => {
      // Evitar duplicar event listeners
      if (!enlace.hasAttribute('data-scroll-initialized')) {
        enlace.setAttribute('data-scroll-initialized', 'true');
        
        enlace.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const target = document.querySelector(targetId);
          
          if (target) {
            // Obtener altura del header fijo
            const header = document.querySelector('.fijo');
            const headerHeight = header ? header.offsetHeight : 0;
            
            // Calcular posición considerando el header fijo
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          } else {
            console.warn(`No se encontró elemento con ID: ${targetId}`);
          }
        });
      }
    });
    
    console.log(`Scroll suave inicializado para ${enlaces.length} enlaces`);
  } else {
    console.warn('No se encontraron enlaces para scroll suave');
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarScrollSuave);
} else {
  inicializarScrollSuave();
}
