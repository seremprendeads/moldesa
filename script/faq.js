// FAQ Toggle - Función mejorada
function toggleFAQ(button) {
  const answer = button.nextElementSibling;
  const isOpen = answer.classList.contains('open');

  // Cerrar todas las respuestas
  document.querySelectorAll('.faq-answer').forEach(item => {
    item.classList.remove('open');
  });

  // Cambiar ícono de todas las preguntas
  document.querySelectorAll('.faq-question').forEach(q => {
    q.innerHTML = q.innerHTML.replace('🔼', '🔽');
  });

  // Abrir la seleccionada si estaba cerrada
  if (!isOpen) {
    answer.classList.add('open');
    button.innerHTML = button.innerHTML.replace('🔽', '🔼');
  }
}

// Inicializar FAQ cuando el DOM esté listo
function inicializarFAQ() {
  const faqButtons = document.querySelectorAll('.faq-question');
  
  if (faqButtons.length > 0) {
    console.log(`FAQ inicializado: ${faqButtons.length} preguntas encontradas`);
    
    // Agregar eventos a los botones que no los tengan
    faqButtons.forEach(button => {
      if (!button.hasAttribute('data-faq-initialized')) {
        button.setAttribute('data-faq-initialized', 'true');
        button.addEventListener('click', () => toggleFAQ(button));
      }
    });
  } else {
    console.warn('No se encontraron elementos FAQ');
  }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarFAQ);
} else {
  inicializarFAQ();
}

// También hacer la función global por si se llama desde HTML
window.toggleFAQ = toggleFAQ;
