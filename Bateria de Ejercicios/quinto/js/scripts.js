"use strict"

const aumentar = document.getElementById("aumentar");

aumentar.addEventListener("click", function () {
    let parrafoQueQuiero = document.querySelectorAll("p")[0];
    let obtenerNumero = Number(parrafoQueQuiero.innerText);

    obtenerNumero++;
    if (obtenerNumero > 100) {
        alert("El numero es mayor a 100");
    }
    parrafoQueQuiero.innerText = obtenerNumero;
});

const disminuir = document.getElementById("disminuir");

disminuir.addEventListener("click", function () {
    let parrafoQueQuiero = document.querySelectorAll("p")[0];
    let obtenerNumero = Number(parrafoQueQuiero.innerText);

    obtenerNumero--;
    if (obtenerNumero < 0) {
        obtenerNumero = 0;
    }
    parrafoQueQuiero.innerText = obtenerNumero;
});

const reiniciar = document.getElementById("reiniciar");

reiniciar.addEventListener("click", function () {
    let parrafoQueQuiero = document.querySelectorAll("p")[0];
    parrafoQueQuiero.innerText = 0;
});