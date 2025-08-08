const bloques = ['navbar', 'hero', 'nosotros', 'moldes', 'galeria', 'testimonios', 'faq', 'call-action', 'footer',];

bloques.forEach(bloque => {
  fetch(`section/${bloque}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById(bloque).innerHTML = html;
    });
});
