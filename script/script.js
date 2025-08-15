    // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');

        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // FAQ functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const isActive = this.classList.contains('active');

                // Close all other FAQs
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                });

                // Toggle current FAQ
                if (!isActive) {
                    this.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });

        // Newsletter form
        document.getElementById('newsletter-btn').addEventListener('click', function(e) {
            e.preventDefault();
            const email = document.getElementById('newsletter-email').value;
            if (email && email.includes('@')) {
                alert('¡Gracias por suscribirte! Te enviaremos nuestras mejores promociones.');
                document.getElementById('newsletter-email').value = '';
            } else {
                alert('Por favor, ingresa un email válido.');
            }
        });