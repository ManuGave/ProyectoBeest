const botones = querrySelectorAll("esquivable");

botones.forEach(boton => {
    querrySelectorAll("esquivable").addEventListener("click",()=>{
        querrySelectorAll("esquivable").classList.add("hidden")
    })
});
