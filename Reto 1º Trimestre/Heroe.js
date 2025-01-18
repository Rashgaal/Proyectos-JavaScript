"use strict"

import { Personaje } from './Personaje.js';
import { Arma } from './Arma.js';
import { Habilidad } from './Habilidad.js';
// Clase Heroe , hereda de personaje a parte de tener sus caracteristicas propias como armaInicial, inventario y habilidad
export class Heroe extends Personaje {
    constructor(nombre, vida, ataque, velocidad) {
        super(nombre, vida, ataque, velocidad);
        //En este caso no le he puesto habilidad para ponersela directamente ya que sera la habilidad inicial
        this.armaInicial = new Arma("Espada corta", 10, "");
        this.ataque = ataque + this.armaInicial.aumentoAtq;
        this.inventario = [
            { nombre: "Poción", cantidad: 2 },
            { nombre: "Superpoción", cantidad: 1 }
        ]
        this.habilidad = new Habilidad("Lanzar espada", 30);
    }
    // Cuando equipo un nuevo arma modifico el ataque y cambia la habilidad del heroe
    equiparArma(nuevoArma) {
        this.armaInicial = nuevoArma;
        this.ataque = this.ataque - this.armaInicial.aumentoAtq + nuevoArma.aumentoAtq;
        this.habilidad = nuevoArma.habilidad;
    }
    //funcion atacar normal
    atacar(enemigo) {
        console.log(this.nombre + " atacó.");
        enemigo.vida -= this.ataque;
        return true;
    }
    //funcion para usar la habilidad
    usarHabilidad(enemigo) {
        console.log(this.nombre + " usó " + this.habilidad.nombre);
        enemigo.vida -= this.habilidad.danho;
        return true;
    }
    //funcion para mostrar el inventario
    mostrarInventario() {
        console.log("INVENTARIO");
        for (let i = 0; i < this.inventario.length; i++) {
            console.log((i + 1) + " - " + this.inventario[i].nombre + " x" + this.inventario[i].cantidad);
        }
        console.log("-------------------");
    }
    //funcion para usar un objeto (lo he limitado a dos objetos de cura simplemente)
    usarObjeto(eleccion) {
        if (this.inventario[eleccion].cantidad === 0) {
            console.log("No quedan más objetos de este tipo.");
            return false;
        } else {
            this.inventario[eleccion].cantidad--;
            if (this.inventario[eleccion].nombre === "Poción") {
                this.vida = this.vida + 30;
                if (this.vida > 90) {
                    this.vida = 90;
                }
                return true;
            } else {
                this.vida = this.vida + 90;
                if (this.vida > 90) {
                    this.vida = 90;
                }
                return true;
            }
        }
    }
}