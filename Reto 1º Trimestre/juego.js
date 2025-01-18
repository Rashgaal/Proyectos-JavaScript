"use strict"
/* Como en la mayoria de los ejercicios, recomiendo iniciar la simulacion y darle a salir, recargar la página y todo funcionara con normalidad*/
import { Arma } from "./Arma.js";
import { Enemigo } from "./Enemigo.js";
import { Habilidad } from "./Habilidad.js";
import { Heroe } from "./Heroe.js";

let enemigos;
var enemigoUno;
var enemigoDos;
var enemigoTres;
var heroe;
menuInicial();
// funcion que devuelve el numero de la eleccion hecha por el jugador en el menu inicial
function menuInicial() {
    alert("RECUPEREMOS ISENGARD");
    let eleccion = 0;
    do {
        eleccion = Number(prompt("MENU INICIAL\n1 - Iniciar partida.\n2 - Salir."));
        accionesMenuInicial(eleccion);
    } while (eleccion != 2);
}
// funcion que recibe la eleccion del menu inicial y realiza funciones al respecto
function accionesMenuInicial(eleccion) {
    switch (eleccion) {
        case 1:
            enemigos = creacionEnemigos();
            enemigoUno = enemigos[0];
            enemigoDos = enemigos[1];
            enemigoTres = enemigos[2];
            heroe = new Heroe(eleccionNombre(), 110, 20, 50);
            historia();
            break;
        case 2:
            alert("Saliendo del juego.");
            break;
        default:
            alert("Debe elegir una opción numérica.");
            break;
    }
}
// funcion que devuelve el nombre de tu Personaje en base a elegirlo tu mismo o de una lista de predefinidos
function eleccionNombre() {
    var nombreFinal = "";
    let eleccionCorrecta = false;
    do {
        let eleccionNombre = Number(prompt("Elige el nombre de tu personaje:\n1 - Seleccionar un nombre de la lista.\n2 - Introducir un nombre."));
        switch (eleccionNombre) {
            case 1:
                nombreFinal = nombrePredefinido();
                eleccionCorrecta = true;
                break;
            case 2:
                nombreFinal = nombreElegido();
                eleccionCorrecta = true;
                break;
            default:
                alert("Debes elegir:\n'1' para elegir un nombre de la lista\n'2' para escribir el nombre de tu personaje")
                eleccionCorrecta = false;
                break;
        }
    } while (eleccionCorrecta === false);
    return nombreFinal;
}
/* funcion que devuelve el nombre, previa confirmacion de una lista de predefinidos, no los formateo porque al 
ser predefinidos los tengo en el formato deseado*/
function nombrePredefinido() {
    const nombresPredefinidos = ["Frodo Bolsón", "Galadriel", "Gimli de Thorin", "Arwen Undómiel", "Aragorn El Montaraz", "Éowyn Dama De Rohan", "Legolas Hojaverde", "Princesa Disa", "Gandalf El Gris", "Bronwyn"];
    let aceptarNombre = false;
    let nombreFinal = "";
    for (let i = 0; i < nombresPredefinidos.length; i++) {
        console.log((i + 1) + " - " + nombresPredefinidos[i]);
    }
    console.log("--------------------")
    do {
        let eleccionPredefinida = Number(prompt("Elige el número del nombre que quieres elegir")) - 1;
        if (eleccionPredefinida > 9 || eleccionPredefinida < 0) {
            alert("Debes elegir un número entre el 1 y el 10");
            aceptarNombre = false;
        } else {
            nombreFinal = nombresPredefinidos[eleccionPredefinida];
            let estarSeguro = confirm("Estas seguro/a que quieres este nombre:\n" + nombreFinal);
            if (estarSeguro === true) {
                aceptarNombre = true;
            } else {
                aceptarNombre = false;
            }
        }
    } while (aceptarNombre === false);
    return nombreFinal;
}
// funcion que devuelve el nombre, previa confirmacion de la propia eleccion del jugador y formateado
function nombreElegido() {
    let aceptarNombre = false;
    let nombreFinal = "";
    do {
        nombreFinal = prompt("Escribe el nombre de tu personaje");
        let estarSeguro = confirm("Estas seguro/a que quieres este nombre:\n" + nombreFinal);
        if (estarSeguro === true) {
            aceptarNombre = true;
        } else {
            aceptarNombre = false;
        }
    } while (aceptarNombre === false)
    return nombreFinal.split(' ').map(parte => parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase()).join(' ');
}
// Funcion que crea los enemigos a los que nos vamos a enfrentar, junto con el tesoro que nos darán si los vencemos
function creacionEnemigos() {
    var listaEnemigos = [];
    // habilidad que tienen las armas
    let habilidadEstoque = new Habilidad("Golpes punzantes", 40);
    let habilidadEspLarga = new Habilidad("Golpe doble", 50);
    let habilidadBaston = new Habilidad("Ventisca", 60);
    // tesoros tras derrotar a los enemigos
    let armaTrasgo = new Arma("Estoque", 20, habilidadEstoque);
    let armaUruk = new Arma("Espada larga", 30, habilidadEspLarga);
    let armaSaruman = new Arma("Bastón de Saruman", 50, habilidadBaston);
    //habilidades para cada uno
    let habTrasgo = new Habilidad("Cuchilladas", 20);
    let habUruk = new Habilidad("Golpe Contundente", 35);
    let habSaruman = new Habilidad("Susurro de Hielo", 40)
    //Creamos a los enemigos
    let trasgo = new Enemigo("Trasgo", 60, 10, 25, armaTrasgo, habTrasgo);
    let uruk = new Enemigo("Uruk-Hai", 100, 20, 50, armaUruk, habUruk);
    let saruman = new Enemigo("Saruman", 130, 20, 75, armaSaruman, habSaruman);
    listaEnemigos.push(trasgo, uruk, saruman);
    return listaEnemigos;
}
// funcion del sistema de combate, he comentado el async porque no funciona para lo que quiero
/*async*/ function sistemaCombate(heroe, enemigo) {
    let primero = quienEmpieza(heroe, enemigo);
    var combateTerminado = false;
    var accionRealizada = false;
    console.log("Comienza el combate entre " + heroe.nombre + " y " + enemigo.nombre + ".");
    do {
        // la linea de abajo la puse para ir aumentando la vida poco a poco, pero no funciona por eso lo he dejado comentado para que funcione el resto de cosas
        //await comprobarAumento(heroe, enemigo);
        console.log("VIDA DEL HEROE: " + heroe.vida);
        if (primero === 1) {
            do {
                let eleccionCombate = Number(prompt("¿Que quieres hacer?\n1 - Atacar.\n2 - Habilidad.\n3 - Inventario."));
                accionRealizada = opcionesCombate(eleccionCombate, heroe, enemigo);
            } while (!accionRealizada)
            if (enemigo.vida <= 0) {
                combateTerminado = true;
            } else {
                enemigo.atacar(heroe);
                if (heroe.vida <= 0) {
                    combateTerminado = true;
                }
            }
        } else {
            enemigo.atacar(heroe);
            if (heroe.vida <= 0) {
                combateTerminado = true;
            } else {
                do {
                    let eleccionCombate = Number(prompt("¿Que quieres hacer?\n1 - Atacar.\n2 - Habilidad.\n3 - Inventario."));
                    accionRealizada = opcionesCombate(eleccionCombate, heroe, enemigo);
                } while (!accionRealizada)
                if (enemigo.vida <= 0) {
                    combateTerminado = true;
                }
            }
        }
        if (heroe.vida < 0 || enemigo.vida < 0) {
            combateTerminado = true;
        }
    } while (!combateTerminado);
    if (heroe.vida <= 0 && enemigo.vida > 0) {
        console.log("GAME OVER");
        console.log(heroe.nombre + " no ha conseguido vencer a " + enemigo.nombre + ".");
        return false;
    } else {
        console.log(enemigo.nombre + " ha sido derrotado.")
        return true;
    }

}
// funcion que realiza una funcion dependiendo de la eleccion que hayamos hecho
function opcionesCombate(eleccion, heroe, enemigo) {
    switch (eleccion) {
        case 1:
            return heroe.atacar(enemigo);
        case 2:
            return heroe.usarHabilidad(enemigo);
        case 3:
            let resultadoInventario = usarObjetoInventario();
            if (!resultadoInventario) {
                return false;
            }
            break;
        default:
            console.log("Debes elegir un valor numerico entre 1 y 3.")
            return false;
    }
    return true;
}
// funcion para usar un objeto del inventario del heroe
function usarObjetoInventario() {
    let objetoUsado = false;
    heroe.mostrarInventario();
    let objetoElegido = Number(prompt("Elige el número del objeto que quieres utilizar.\n(Pulsa 0 para salir del inventario)")) - 1;
    if (objetoElegido === -1) {
        console.log("Volviendo al menú de combate.");
        return false;
    }
    objetoUsado = heroe.usarObjeto(objetoElegido);
    if (!objetoUsado) {
        return false;
    }
    return true;
}
// Funcion que decide quien empieza 
function quienEmpieza(heroe, enemigo) {
    if (heroe.velocidad > enemigo.velocidad) {
        return 1;
    } else if (heroe.velocidad < enemigo.velocidad) {
        return -1;
    } else {
        return Math.floor(Math.random() * 2) === 0 ? 1 : -1;
    }
}
// funcion que recorre los tres capitulos de la hisotria
function historia() {
    let heroeVivo = true;
    heroeVivo = capituloUno(heroe, enemigoUno);
    if (heroeVivo) {
        heroeVivo = capituloDos(heroe, enemigoDos);
        if (heroeVivo) {
            heroeVivo = capituloTres(heroe, enemigoTres);
            if (heroeVivo) {
                alert("FIN DE LA HISTORIA");
                console.log("Si quieres más compra el DLC");
            } else {
                console.log("Has muerto en el capitulo tres");
            }
        } else {
            console.log("Has muerto en el capitulo dos");
        }
    } else {
        console.log("Has muerto en el capitulo uno");
    }
}
// funcion del capitulo uno de la historia
function capituloUno(heroe, enemigo) {
    alert("Te adentras en el antiguo bosque de Fangorn, donde los árboles se elevan como colosos. El aire es denso y poco a poco notas que algo te va siguiendo, pero no consigues ver nada. Al rato paras a descansar, de repente esuchas un grito, te giras y ves un trasgo avalanzandose sobre ti.");
    sistemaCombate(heroe, enemigo);
    if (heroe.vida <= 0) {
        alert("El trasgo se avalanzó sobre ti y te degolló");
        return false;
    } else {
        alert("Has derrotado a " + enemigo.nombre);
        let equipar = Number(prompt("El " + enemigo.nombre + " ha dejado caer '" + enemigo.tesoro.nombre + "' ¿Quieres equiparla?\n1 - Sí.\n2 - No."));
        if (equipar === 1) {
            heroe.equiparArma(enemigo.tesoro);
        }
        alert("Continuas tu viaje con cautela, no era normal encontrarse un trasgo de las montañas en el bosque.");
        return true;
    }
}
// funcion del capitulo dos de la historia
function capituloDos(heroe, enemigo) {
    alert("Tras atravesar Fangorn ves la enorme torre de Isengard, continuas hasta la puerta, pero justo allí aparece un Uruk-hai, que sin esperarlo te lanza una flecha.");
    sistemaCombate(heroe, enemigo)
    if (heroe.vida <= 0) {
        alert("El Uruk-Hai se lanza con toda su furia sobre ti acabando con tu existencia.");
        return false;
    } else {
        alert("Has derrotado a " + enemigo.nombre);
        let equipar = Number(prompt("El " + enemigo.nombre + " ha dejado caer '" + enemigo.tesoro.nombre + "' ¿Quieres equiparla?\n1 - Sí.\n2 - No."));
        if (equipar === 1) {
            heroe.equiparArma(enemigo.tesoro);
        }
        alert("No sabes por qué has encontrado a este terrible ser aquí, pero comienzas a subir las escaleras para encontrarte a Saruman.");
        return true;
    }
}
// funcion del capitulo tres de la historia
function capituloTres(heroe, enemigo) {
    alert("Conforme vas subiendo notas que un escalofrío te sube por la espalda, sientes que nada bueno se avecina. Finalmente llegas arriba llegas arriba y te encuentras con Saruman, que sin mediar palabra lanza un hechizo sobre ti.");
    sistemaCombate(heroe, enemigo)
    if (heroe.vida <= 0) {
        alert("Con tus últimas fuerzas escuchas como Saruman se acerca a ti, poco a poco todo se hace más oscuro.");
        return false;
    } else {
        alert("Has derrotado a " + enemigo.nombre);
        let equipar = Number(prompt("El " + enemigo.nombre + " ha dejado caer '" + enemigo.tesoro.nombre + "' ¿Quieres equiparla?\n1 - Sí.\n2 - No."));
        if (equipar === 1) {
            heroe.equiparArma(enemigo.tesoro);
        }
        alert("No entiendes nada, ahora comienza otro camino, debes ir a La Comarca a buscar a Gandalf y contárselo todo, él sabrá que hacer.");
        return true;
    }
}
/* he intentado crear esta funcion que devuelve una promesa para ir curando a los personajes a modo de recuperacion natural y 
llamarlo en la funcion de abajo, pero no funciona*/
function aumentarVida(heroe, enemigo) {
    return new Promise(resolve => {
        let vidaMaximaHeroe = 90;
        let vidaMaximaTrasgo = 60;
        let vidaMaximaUruk = 100;
        let vidaMaximaSaruman = 130;

        setTimeout(() => {
            // Incrementar vida del héroe
            if (heroe.vida < vidaMaximaHeroe) {
                heroe.vida += 1;
                if (heroe.vida > vidaMaximaHeroe) {
                    heroe.vida = vidaMaximaHeroe;
                }
            }

            // Incrementar vida del enemigo dependiendo de su tipo
            if (enemigo.nombre === "Trasgo" && enemigo.vida < vidaMaximaTrasgo) {
                enemigo.vida += 1;
                if (enemigo.vida > vidaMaximaTrasgo) {
                    enemigo.vida = vidaMaximaTrasgo;
                }
            } else if (enemigo.nombre === "Uruk-Hai" && enemigo.vida < vidaMaximaUruk) {
                enemigo.vida += 1;
                if (enemigo.vida > vidaMaximaUruk) {
                    enemigo.vida = vidaMaximaUruk;
                }
            } else if (enemigo.nombre === "Saruman" && enemigo.vida < vidaMaximaSaruman) {
                enemigo.vida += 1;
                if (enemigo.vida > vidaMaximaSaruman) {
                    enemigo.vida = vidaMaximaSaruman;
                }
            }


            resolve(true);
        }, 3000);
    });
}
//funcion asincrona para llamar a la funcion anterior, pero no funciona
async function comprobarAumento(heroe, enemigo) {
    const comprobar = await aumentarVida(heroe, enemigo);
    if (comprobar) {
        console.log("Sigue el combate.");
    }
}