    // Efectos al cargar el DOM
    document.addEventListener('DOMContentLoaded', () => {
        // Hover effects para las cards
        document.querySelectorAll('.service-card, .gallery-item').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    });