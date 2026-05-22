

    const grilla = document.querySelector('.grilla-prueba');

    const cantidadColumnas = Math.floor(window.innerWidth / 40);
    const cantidadFilas = Math.floor(window.innerHeight / 40);

    grilla.style.setProperty('--columnas', cantidadColumnas);
    grilla.style.setProperty('--filas', cantidadFilas);

    const totalPixeles = cantidadColumnas * cantidadFilas;

    for (let i = 0; i < totalPixeles; i++) {
        const nuevoPixel = document.createElement('div');
        nuevoPixel.classList.add('pixel');
        grilla.appendChild(nuevoPixel);
    }
