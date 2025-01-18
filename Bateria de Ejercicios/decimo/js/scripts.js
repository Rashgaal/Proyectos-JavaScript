"use strict"
//termina el 11 de abril
window.onload = () => {

    const general = document.querySelector("div");
    general.style.width = "1500px";
    general.style.height = "500px";
    general.style.display = "flex"; // Display flex para organizar los divs horizontalmente
    general.style.alignItems = "flex-start"; // Alinear los elementos al principio
    general.style.marginLeft = "10%";
    general.style.marginRight = "10%";
    general.style.paddingRight = "50px";
    general.style.justifyContent = "flex-end";
    general.style.backgroundImage = "url('recursos/bird-wings-flying.gif')";
    general.style.backgroundRepeat = "no-repeat";
    general.style.backgroundSize = "100% 100%";
    general.style.paddingTop = "20%";
    document.body.style.backgroundColor = "gold";

    const fechaFinal = new Date("2025-06-24");

    function cuentaAtras() {

        const fechaInicial = new Date();
        let diferencia = fechaFinal - fechaInicial;

        if (diferencia <= 0) {
            const mensajeFinal = document.createElement("h1");
            mensajeFinal.innerHTML = "FIN DEL CURSO";
            document.body.appendChild(mensajeFinal);
        } else {
            const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

            const seleccionarSpan = document.getElementById("hora");
            seleccionarSpan.style.backgroundColor = "lightgreen";
            seleccionarSpan.style.padding = "50px";
            seleccionarSpan.style.borderRadius = "50px";
            seleccionarSpan.innerHTML = dias + " días => " + horas + " : " + minutos + " : " + segundos;

            setTimeout(cuentaAtras, 1000);
        }
    }
    cuentaAtras();
}