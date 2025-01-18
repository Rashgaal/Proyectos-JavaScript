"use strict"

window.onload = () => {

    const arrayColores = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "black", "white", "gray", "cyan", "magenta", "lime", "indigo", "violet", "teal", "navy", "gold", "silver"];

    let colorAdivinar = Math.floor(Math.random() * arrayColores.length);
    let colorProhibido = arrayColores[colorAdivinar];

    document.body.style.backgroundColor = "lightyellow";
    // DIV GENERAL
    const completo = document.getElementById("completo");
    completo.style.width = "600px";
    completo.style.height = "600px";
    completo.style.borderColor = "black";
    completo.style.backgroundColor = "lightgrey";
    completo.style.marginLeft = "550px";
    completo.style.padding = "50px";
    completo.style.display = "flex";
    completo.style.flexDirection = "column";
    completo.style.justifyContent = "center";
    completo.style.alignItems = "center";

    // COLOR A ACERTAR
    const color = document.createElement("div");
    color.style.width = "250px";
    color.style.height = "250px";
    color.style.border = "solid 3px black";
    color.style.backgroundColor = colorProhibido;
    completo.appendChild(color);

    // PARRAFO
    const texto = document.createElement("p");
    texto.innerHTML = "Elige una opción";
    texto.style.fontSize = "30px";
    completo.appendChild(texto);

    // DIV BOTONES
    const divBotones = document.createElement("div");
    divBotones.style.width = "300px";
    divBotones.style.height = "50px";
    divBotones.style.display = "flex";
    divBotones.style.gap = "30px";
    divBotones.style.justifyContent = "center";
    completo.appendChild(divBotones);

    // COLOR 1
    const divColor1 = document.createElement("div");
    divColor1.style.width = "50px";
    divColor1.style.height = "50px";
    divColor1.style.border = "solid 1px black";

    divColor1.addEventListener("click", () => prueba(divColor1));

    /*
    se puede haer como en la linea 52 o asi
    divColor1.addEventListener("click", prueba () {
        if (divColor1.style.backgroundColor === color.style.backgroundColor) {
            mensajeFinal.innerHTML = "¡CORRECTO!";
            mensajeFinal.style.color = "green";
        } else {
            mensajeFinal.innerHTML = "¡ERROR!";
            mensajeFinal.style.color = "red";
        }
    });
    */

    // COLOR 2
    const divColor2 = document.createElement("div");
    divColor2.style.width = "50px";
    divColor2.style.height = "50px";
    divColor2.style.border = "solid 1px black";

    divColor2.addEventListener("click", () => prueba(divColor2));

    // COLOR 3
    const divColor3 = document.createElement("div");
    divColor3.style.width = "50px";
    divColor3.style.height = "50px";
    divColor3.style.border = "solid 1px black";

    divColor3.addEventListener("click", () => prueba(divColor3));

    divBotones.appendChild(divColor1);
    divBotones.appendChild(divColor2);
    divBotones.appendChild(divColor3);

    // MENSAJE FINAL
    const mensajeFinal = document.createElement("p");
    mensajeFinal.style.fontSize = "30px";
    mensajeFinal.style.marginTop = "20px";
    completo.appendChild(mensajeFinal);

    // BOTON REINICIO
    const botonReinicio = document.createElement("button");
    botonReinicio.id = "reiniciar";
    botonReinicio.innerText = "REINICIAR";
    botonReinicio.style.fontSize = "20px";
    completo.appendChild(botonReinicio);

    botonReinicio.addEventListener("click", function () {
        location.reload();
    });

    const divCorrecto = Math.floor(Math.random() * 3);

    let coloresDisponibles = arrayColores.filter(color => color !== colorProhibido);

    let colorAleatorio1 = obtenerColorDiferente(coloresDisponibles, colorProhibido);
    let colorAleatorio2 = obtenerColorDiferente(coloresDisponibles, colorProhibido, colorAleatorio1);

    if (divCorrecto === 0) {
        divColor1.style.backgroundColor = arrayColores[colorAdivinar];
        divColor2.style.backgroundColor = colorAleatorio1;
        divColor3.style.backgroundColor = colorAleatorio2;
    } else if (divCorrecto === 1) {
        divColor2.style.backgroundColor = arrayColores[colorAdivinar];
        divColor1.style.backgroundColor = colorAleatorio1;
        divColor3.style.backgroundColor = colorAleatorio2;
    } else {
        divColor3.style.backgroundColor = arrayColores[colorAdivinar];
        divColor1.style.backgroundColor = colorAleatorio1;
        divColor2.style.backgroundColor = colorAleatorio2;
    }

    function obtenerColorDiferente(coloresDisponibles, colorProhibido, colorAnterior = null) {
        let colorRandom;
        do {
            colorRandom = coloresDisponibles[Math.floor(Math.random() * coloresDisponibles.length)];
        } while (colorRandom === colorProhibido || colorRandom === colorAnterior);
        return colorRandom;
    }

    function prueba(divSeleccionado) {

        if (divSeleccionado.style.backgroundColor === color.style.backgroundColor) {
            mensajeFinal.innerHTML = "¡CORRECTO!";
            mensajeFinal.style.color = "green";
        } else {
            mensajeFinal.innerHTML = "¡ERROR!";
            mensajeFinal.style.color = "red";
        }
    }
}