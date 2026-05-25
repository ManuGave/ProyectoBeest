const tarjetaVerde = document.getElementById("imagen-boton");

tarjetaVerde.addEventListener("click", () => {

    setTimeout(() => {
        tarjetaVerde.classList.Remove("hidden")
    }, 1200);

})