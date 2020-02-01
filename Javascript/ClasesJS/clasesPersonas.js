class Persona {


    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    mostrar() {
        return `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }


}

class Adulto extends Persona {

    constructor(nombre, apellido, edad, coche) {
        super(nombre, apellido, edad)
        this.coche = coche;
    }

}

class Nino extends Persona {

    constructor(nombre, apellido, edad, colegio) {
        super(nombre, apellido, edad)
        this.colegio = colegio;
    }
}

let persona1 = new Persona("PEPE", "PERES", 13)
let adult1 = new Adulto("ANDRES", "VICENTE", 46, true)


console.log(adult1.mostrar())