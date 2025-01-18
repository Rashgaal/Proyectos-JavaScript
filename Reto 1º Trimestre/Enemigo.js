"use strict"

import { Personaje } from './Personaje.js';
/* Clase Enemigo , hereda de personaje a parte de tener sus caracteristicas propias como habilidad, habilidadUsada(para solo usar 
la habilidad en un momento determinado) y tesoro, que es el premio por matar al enemigo, que normalmente será un arma*/
export class Enemigo extends Personaje {
    constructor(nombre, vida, ataque, velocidad, tesoro, habilidad) {
        super(nombre, vida, ataque, velocidad);
        this.tesoro = tesoro;
        this.habilidad = habilidad;
        this.habilidadUsada = false;
    }
    // funcion de ataque que depende del enemigo, su vida y si ha usado su habilidad
    atacar(heroe) {
        if (!this.habilidadUsada) {
            if (this.nombre === "Trasgo" && this.vida <= 25) {
                console.log(this.nombre + " usó " + this.habilidad.nombre + ".");
                heroe.vida -= this.habilidad.danho;
                this.habilidadUsada = true;
            } else if (this.nombre === "Uruk-Hai" && this.vida <= 40) {
                console.log(this.nombre + " usó " + this.habilidad.nombre + ".");
                heroe.vida -= this.habilidad.danho;
                this.habilidadUsada = true;
            } else if (this.nombre === "Saruman" && this.vida <= 50) {
                console.log(this.nombre + " usó " + this.habilidad.nombre + ".");
                heroe.vida -= this.habilidad.danho;
                this.habilidadUsada = true;
            }
        } else {
            console.log(this.nombre + " atacó.");
            heroe.vida -= this.ataque;
        }
        if ((this.nombre === "Trasgo" && this.vida > 25) || (this.nombre === "Uruk-Hai" && this.vida > 40) || (this.nombre === "Saruman" && this.vida > 50)) {
            console.log(this.nombre + " atacó.");
            heroe.vida -= this.ataque;
        }
    }
}