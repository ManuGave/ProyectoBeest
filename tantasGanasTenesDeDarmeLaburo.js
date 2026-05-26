

const elementosEscape = document.querySelectorAll('.esquivable');
const tarjeta = document.querySelector('.presentacion');
const grillaContenedor = document.querySelector('.grilla-prueba');

elementosEscape.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        const angulo = Math.random() * Math.PI * 2;
        const distancia = 90; 
        const x = Math.cos(angulo) * distancia;
        const y = Math.sin(angulo) * distancia;
        elemento.style.transform = `translate(${x}px, ${y}px)`;
    });

    elemento.addEventListener('click', () => {
        tarjeta.classList.add('explotando');
        
        if (grillaContenedor) {
            grillaContenedor.style.backgroundColor = '#ff0055';
        }
        
        const pixeles = document.querySelectorAll('.pixel');
        pixeles.forEach(p => {
            p.style.backgroundColor = '#2a0010';
            p.style.borderColor = '#ff0055';

        });

        setTimeout(() => {
            const pantallaError = document.getElementById('pantallaError');
            tarjeta.style.display = 'none';
            const cartel = document.getElementById('pantallaError');
            if (cartel) {
                cartel.classList.remove("hidden");
            }
        }, 1200);
    });
});