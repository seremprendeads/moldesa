// Esperar a que se carguen los bloques con fetch() antes de ejecutar otros scripts
  document.addEventListener("DOMContentLoaded", () => {
    // Esperar un poco para asegurarse que fetch() terminó
    setTimeout(() => {
      const scripts = [
        'script/menu-hamburguesa.js',
        'script/scroll-suave.js',
        'script/faq.js',
        'script/efectos-cargadom.js'
      ];

      scripts.forEach(src => {
        const s = document.createElement('script');
        s.src = src;
        document.body.appendChild(s);
      });
    }, 200); // puede ajustar este tiempo si tarda más en cargar los bloques
  });
