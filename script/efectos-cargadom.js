// Efectos al cargar el DOM
function inicializarEfectos() {
  const elementos = document.querySelectorAll('.service-card, .gallery-item');
  
  if (elementos.length > 0) {
    elementos.forEach(elemento => {
      // Evitar duplicar event listeners
      if (!elemento.hasAttribute('data-efectos-initialized')) {
        elemento.setAttribute('data-efectos-initialized', 'true');
        
        elemento.addEventListener('mouseenter', () => {
          elemento.style.transform = 'translateY(-10px) scale(1.02)';
          elemento.style.transition = 'transform 0.3s ease';
        });

        elemento.addEventListener('mouseleave', () => {
          elemento.style.transform = 'translateY(0) scale(1)';
        });
      }
    });
    
    console.log(`Efectos hover inicializados para ${elementos.length} elementos`);
  } else {
    console.warn('No se encontraron elementos para efectos hover');
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarEfectos);
} else {
  inicializarEfectos();
}
