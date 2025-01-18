"use strict"

let nombre;
let apellido;
let edad;
let respuesta = true;
let arrayNombre = []
let arrayApellido = [];
let arrayEdad = [];

do {
    nombre = prompt("Introduce el nombre");
    arrayNombre.push(nombre);
    apellido = prompt("Introduce el apellido");
    arrayApellido.push(apellido);
    edad = Number(prompt("Introduce la edad"));
    arrayEdad.push(edad);
    respuesta = confirm("¿Quieres añadir otro?");
} while (respuesta);

const tabla = document.createElement("table");
tabla.style.border = "1px solid black";
//tabla.style.borderCollapse = "collapse";

// Crear encabezado de la tabla
const encabezado = document.createElement("tr");

const th1 = document.createElement("th");
th1.innerText = "Nombre";
const th2 = document.createElement("th");
th2.innerText = "Apellido";
const th3 = document.createElement("th");
th3.innerText = "Edad";

encabezado.appendChild(th1);
encabezado.appendChild(th2);
encabezado.appendChild(th3);

tabla.appendChild(encabezado);

// Crear filas con los datos
for (let i = 0; i < arrayNombre.length; i++) {
    let crearFila = document.createElement("tr");

    let crearColumna1 = document.createElement("td");
    crearColumna1.innerText = arrayNombre[i];
    crearFila.appendChild(crearColumna1);

    let crearColumna2 = document.createElement("td");
    crearColumna2.innerText = arrayApellido[i];
    crearFila.appendChild(crearColumna2);

    let crearColumna3 = document.createElement("td");
    crearColumna3.innerText = arrayEdad[i];
    crearFila.appendChild(crearColumna3);

    tabla.appendChild(crearFila);
}

document.body.appendChild(tabla);