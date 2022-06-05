
//Funcion para random
const functions = {
    
    random(min, max){
        //genero número random
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}

//Declaración de la class Pokemon

class Fighter {

    constructor(nombre, id, tipo, resistencia, fuerza) {
        this.nombre = nombre;
        this.id = id;
        this.tipo = tipo;
        this.resistencia = resistencia;
        this.fuerza = fuerza;
        this.vida = 100;
        this.random = functions.random(1,10);
    }

    ataque() {
        this.vida -= this.random;
        this.random=functions.random(1,10);
    }
};

//Instanciando personajes

let fighter1 = new Fighter("gangsterA", "1",  "bad", 80, 90);
let fighter2 = new Fighter("gangsterB", "2", "bad", 90, 95);
let fighter3 = new Fighter("gangsterC", "3", "bad", 100, 100);
let fighter4 = new Fighter("lady", "4", "innocent", 70, 80);

//Genero un traductor/diccionario

let arrayJugadores = {
    1 : fighter1,
    2 : fighter2,
    3 : fighter3,
    4 : fighter4
}

//Generando variables básicas de entorno

let grupo1 = "";

let grupo2 = "";