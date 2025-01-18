"use strict"
//Clase personaje, clase padre de heroe y enemigo
export class Personaje {
    constructor(nombre, vida, ataque, velocidad) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.velocidad = velocidad;
    }
}