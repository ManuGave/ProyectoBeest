const imagenAzul = document.getElementById("imagen-boton");
const tarjetaVerde = document.getElementById("tarjetaPresentacionVerde");
const pixeles = document.querySelectorAll('.pixel');

imagenAzul.addEventListener('click', () => {
tarjeta.classList.add("temblando");


    const columnas = parseInt(grillaContenedor.style.getPropertyValue('--columnas')) || 20;
    const totalPixeles = pixeles.length;
    const filas = Math.ceil(totalPixeles / columnas);


    const centroEjeX = columnas/2;
    const centroEjeY = filas/2;


    pixeles.forEach((p, i) => {
        const pixelX = i % columnas;
        const pixelY = Math.floor(i / columnas);

        const relX = pixelX - centroEjeX;
        const relY = pixelY - centroEjeY;
        const distGrilla = Math.sqrt(relX * relX + relY * relY); 

        const delayInfeccion = 25*distGrilla;

        setTimeout(() => {
                p.style.backgroundColor = '#2a0010';
                p.style.borderColor = '#00ff00';
                p.style.setProperty('box-shadow', '0 0 8px #00ff66', 'important');
                
                setTimeout(() => {
                    p.style.setProperty('box-shadow', 'none', 'important');
                }, 150)
        }, delayInfeccion)
    });


    if (grillaContenedor) {
            setTimeout(() => {
                grillaContenedor.style.backgroundColor = "#00ff00";
            }, 400);
    }
        
    setTimeout(() => {

        if(tarjeta){

            tarjeta.style.display = "none";
        }
            
        if(tarjetaVerde){
            tarjetaVerde.classList.remove('hidden');
            tarjetaVerde.style.setProperty('display', 'flex', 'important');
            console.log("Tarjeta verde mostrada");
        }
        else{
            console.log("No hay tarjeta verde");
        }

        pixeles.forEach(p => {
            p.addEventListener('mouseover', () => {
            p.style.backgroundColor = '#00ff66';
            p.style.boxShadow = '0 0 10px #00ff66, 0 0 20px #00ff66';
            });    


            p.addEventListener('mouseout', () => {
                p.style.backgroundColor = '#2a0010';
                p.style.boxShadow = 'none';
            })
        });

        

    }, 1200);



})