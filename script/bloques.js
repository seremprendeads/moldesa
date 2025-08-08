// Esperar a que se carguen los bloques con fetch() antes de ejecutar otros scripts
document.addEventListener("DOMContentLoaded", () => {
  // Lista de bloques a cargar
  const bloques = ['navbar', 'hero', 'nosotros', 'moldes', 'testimonios', 'faq', 'call-action', 'footer'];
  
  let bloquesCompletados = 0;
  const totalBloques = bloques.length;

  // Función para cargar scripts después de que todos los bloques estén cargados
  function cargarScriptsAdicionales() {
    const scripts = [
      'script/menu-hamburguesa.js',
      'script/scroll-suave.js', 
      'script/faq.js',
      'script/efectos-cargadom.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.onerror = () => console.warn(`No se pudo cargar: ${src}`);
      document.body.appendChild(script);
    });
  }

  // Cargar cada bloque
  bloques.forEach(bloque => {
    fetch(`section/${bloque}.html`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.text();
      })
      .then(html => {
        const elemento = document.getElementById(bloque);
        if (elemento) {
          elemento.innerHTML = html;
          bloquesCompletados++;
          
          // Cuando todos los bloques estén cargados, cargar los scripts adicionales
          if (bloquesCompletados === totalBloques) {
            setTimeout(cargarScriptsAdicionales, 100);
          }
        } else {
          console.warn(`No se encontró elemento con ID: ${bloque}`);
        }
      })
      .catch(error => {
        console.error(`Error cargando ${bloque}:`, error);
        bloquesCompletados++; // Contar como completado para no bloquear otros scripts
        
        if (bloquesCompletados === totalBloques) {
          setTimeout(cargarScriptsAdicionales, 100);
        }
      });
  });
});

