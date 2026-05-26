const imagenAzul = document.getElementById("imagen-boton");
const tarjetaVerde = document.getElementById("contenedor-imagen-presentacion");
const pixeles = document.querySelectorAll('.pixel');

imagenAzul.addEventListener('click', () => {
    tarjeta.classList.add("temblando");


        pixeles.forEach(p => {
            p.style.backgroundColor = '#2a0010';
            p.style.borderColor = '#00ff00';
        });

        if(grillaContenedor){
            grillaContenedor.style.backgroundColor = "#00ff00"
        }
        
    setTimeout(() => {

        if(tarjeta){

            tarjeta.style.display = "none";
        }
            
        if(tarjetaVerde){
            tarjetaContactoVerde.style.display = 'flex';
            tarjetaVerde.classList.remove("hidden");
        }

            

    }, 1200);


    pixeles.forEach(p => {
        p.addEventListener('mouseover', () => {
        p.style.backgroundColor = '#00ff66';
        p.style.boxShadow = '0 0 10px #00ff66, 0 0 20px #00ff66';
        });    
    });

})