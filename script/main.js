const bloques = ['navbar', 'hero', 'nosotros', 'moldes', 'testimonios', 'faq', 'call-action', 'footer'];

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
      } else {
        console.warn(`No se encontró elemento con ID: ${bloque}`);
      }
    })
    .catch(error => {
      console.error(`Error cargando ${bloque}:`, error);
    });
});
