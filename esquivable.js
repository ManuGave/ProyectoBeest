// Agarramos todos los elementos que tengan la clase 'esquivable'
const elementosEscape = document.querySelectorAll('.esquivable');

elementosEscape.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        const angulo = Math.random() * Math.PI * 2;
        const distancia = 80; 
        const x = Math.cos(angulo) * distancia;
        const y = Math.sin(angulo) * distancia;
        elemento.style.transform = `translate(${x}px, ${y}px)`;
    });
});