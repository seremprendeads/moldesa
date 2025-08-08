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

// Inicializar FAQ inmediatamente
function initFAQ() {
  const faqButtons = document.querySelectorAll('[data-faq-toggle]');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => toggleFAQ(button));
  });
  console.log('FAQ inicializado:', faqButtons.length, 'botones');
}

// Ejecutar inmediatamente
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFAQ);
} else {
  initFAQ();
}

// También ejecutar con un pequeño delay para asegurar
setTimeout(initFAQ, 50);
