 // FAQ Toggle
    function toggleFAQ(button) {
        const answer = button.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        // Cerrar todas las respuestas
        document.querySelectorAll('.faq-answer').forEach(item => {
            item.classList.remove('open');
        });

        // Abrir la seleccionada si estaba cerrada
        if (!isOpen) {
            answer.classList.add('open');
        }
    }