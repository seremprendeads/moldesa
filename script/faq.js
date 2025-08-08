// FAQ Toggle - Función que funciona con ambos enfoques
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

// Hacer la función disponible globalmente INMEDIATAMENTE
window.toggleFAQ = toggleFAQ;

// Inicializar FAQ
function inicializarFAQ() {
  // Buscar botones con onclick (método antiguo)
  const faqButtonsOnclick = document.querySelectorAll('.faq-question[onclick]');
  
  // Buscar botones con data-faq-toggle (método nuevo)
  const faqButtonsData = document.querySelectorAll('[data-faq-toggle]');
  
  // Buscar botones sin atributos especiales
  const faqButtonsGeneral = document.querySelectorAll('.faq-question:not([onclick]):not([data-faq-toggle])');
  
  console.log('FAQ encontrados:', {
    onclick: faqButtonsOnclick.length,
    dataToggle: faqButtonsData.length,
    general: faqButtonsGeneral.length
  });

  // Agregar eventos a botones con data-faq-toggle
  faqButtonsData.forEach(button => {
    if (!button.hasAttribute('data-faq-initialized')) {
      button.setAttribute('data-faq-initialized', 'true');
      button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFAQ(button);
      });
    }
  });

  // Agregar eventos a botones generales
  faqButtonsGeneral.forEach(button => {
    if (!button.hasAttribute('data-faq-initialized')) {
      button.setAttribute('data-faq-initialized', 'true');
      button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleFAQ(button);
      });
    }
  });

  const totalInicializados = faqButtonsData.length + faqButtonsGeneral.length;
  if (totalInicializados > 0) {
    console.log(`FAQ inicializado correctamente: ${totalInicializados} botones`);
  } else {
    console.warn('No se encontraron elementos FAQ para inicializar');
  }
}

// Ejecutar múltiples veces para asegurar que funcione
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarFAQ);
} else {
  inicializarFAQ();
}

// Ejecutar después de un timeout
setTimeout(inicializarFAQ, 100);
setTimeout(inicializarFAQ, 500);
