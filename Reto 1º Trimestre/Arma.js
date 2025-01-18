"use strict"
//Clase Arma, tiene un nombre, un aumento de ataque y una habilidad asociada que será la habilidad activa del personaje
export class Arma {
    constructor(nombre, aumentoAtq, habilidad) {
        this.nombre = nombre;
        this.aumentoAtq = aumentoAtq;
        this.habilidad = habilidad;
    }
}