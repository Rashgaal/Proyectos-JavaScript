"use strict"

window.onload = () => {

    const divImagen = document.getElementById("contenedorImagen");
    divImagen.style.width = "250px";
    divImagen.style.height = "250px";


    const imagen = document.createElement("img");
    imagen.setAttribute("src", "./imagenes/1.jpg");
    imagen.setAttribute("alt", "Creeper");
    imagen.style.width = "250px";
    imagen.style.height = "250px";

    divImagen.appendChild(imagen);

    const parrafo = document.createElement("p");
    parrafo.innerHTML = imagen.alt;

    divImagen.appendChild(parrafo);

    let arraySrcAlt = [
        { src: "./imagenes/1.jpg", alt: "Creeper" },
        { src: "./imagenes/2.jpg", alt: "Tortuga" },
        { src: "./imagenes/3.jpg", alt: "Carita" },
        { src: "./imagenes/4.jpg", alt: "Fruta" },
        { src: "./imagenes/5.jpg", alt: "Planta" }
    ]

    let indiceActual = 0;

    const anterior = document.getElementById("anterior");
    anterior.addEventListener("click", function () {
        if (indiceActual === 0) {
            indiceActual = arraySrcAlt.length - 1;
        } else {
            indiceActual--;
        }

        imagen.setAttribute("src", arraySrcAlt[indiceActual].src);
        imagen.setAttribute("alt", arraySrcAlt[indiceActual].alt);
        parrafo.innerHTML = arraySrcAlt[indiceActual].alt;
    });

    const siguiente = document.getElementById("siguiente");
    siguiente.addEventListener("click", function () {
        if (indiceActual === arraySrcAlt.length - 1) {
            indiceActual = 0;
        } else {
            indiceActual++;
        }

        imagen.setAttribute("src", arraySrcAlt[indiceActual].src);
        imagen.setAttribute("alt", arraySrcAlt[indiceActual].alt);
        parrafo.innerHTML = arraySrcAlt[indiceActual].alt;
    });
}