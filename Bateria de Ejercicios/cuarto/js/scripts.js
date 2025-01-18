"use strict"

window.onload = () => {
    const generar = document.getElementById("generarNombre");
    generar.addEventListener("click", function () {
        const nombres = [
            "Ana", "Luis", "Carlos", "María", "José", "Pedro", "Laura", "Sofía", "Javier", "Isabel",
            "Miguel", "Carmen", "David", "Elena", "Raúl", "Marta", "Fernando", "Beatriz", "Antonio", "Patricia"
        ];

        let nombreElegido = Math.floor(Math.random() * 19) + 1;

        let parrafo = document.querySelectorAll("p")[0];
        parrafo.innerHTML = nombres[nombreElegido];
        console.log(nombreElegido);
    });
}