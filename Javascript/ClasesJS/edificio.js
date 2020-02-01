// edificio 

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
class Vivienda {
    constructor(piso, letra) {
        this.piso = piso;
        this.letra = letra;
        this.habitantes = new Array();
    }
    mostrar() {
        let texto = `Esta vivienda es el piso ${this.piso}} letra ${this.letra} y viven \n`
        for (const habitante of this.habitantes) {
            texto += habitante.mostrar() + "\n"
        }
        return texto
    }
    agregarHabitante(habitante) {
        if (typeof (habitante) == "Persona") {
            this.habitantes.push(habitante)
            console.log("Exito en la agregacion de habitante");
        }
    }
}
class Edificio {
    constructor(calle, numero) {
        this.calle = calle;
        this.numero = numero;
        this.casas = new Array()
    }

    agregarCasa(casa) {
        this.casas.push(casa)
        console.log("Exito en la agregacion de casa")
    }

    mostrar() {
        let texto = `Esta casa estan en la calle  ${this.calle} numero ${this.numero} y tiene estas viviendas \n`
        for (const casa of this.casas) {
            texto += casa.mostrar() + "\n"
        }
        return texto
    }
}

persona1 = new Persona("Juan", "Merengue", 45)
persona2 = new Persona("Mariano", "Merengue", 40)

vivienda1 = new Vivienda("3º", "F")
edificio1 = new Edificio("Calle Falsa", "123")

vivienda1.agregarHabitante(persona1);
vivienda1.agregarHabitante(persona2);

edificio1.agregarCasa(vivienda1)

// console.log(persona1.mostrar())
// console.log(vivienda1.mostrar())
console.log(edificio1.mostrar())
