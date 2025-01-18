"use strict"

window.onload = () => {
    const boton = document.getElementById("agregar");

    boton.addEventListener("click", function () {

        let lista = document.getElementById("lista");
        lista.style.backgroundColor = "lightyellow";
        lista.style.listStyleType = "none"
        let textoTarea = document.getElementById("texto").value;

        if (textoTarea !== "") {
            let tareaLista = document.createElement("li");
            tareaLista.style.fontSize = "xx-large";
            tareaLista.style.color = "black";

            tareaLista.onclick = (evento) => {
                console.log(tareaLista.style.color);
                if (tareaLista.style.color === "black") {
                    tareaLista.style.color = "green";
                } else {
                    tareaLista.style.color = "black";
                }
            }

            tareaLista.ondblclick = (evento) => {
                tareaLista.style.display = "none";
            }

            tareaLista.innerHTML = textoTarea;

            lista.appendChild(tareaLista);
            document.getElementById("texto").value = "";

        } else {
            alert("Por favor, escribe una tarea antes de agregarla.");
        }

    });

}