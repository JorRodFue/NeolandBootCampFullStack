console.log("Prueba funcionamiento")

class Coche {
    constructor(pColor, pMarca, pModelo) {
        this._color = pColor;
        this._marca = pMarca;
        this.modelo = pModelo;
        this.velocidad = 0;
    }


    get color() {
        console.log("ENTRAMOS GET")
        return this._color
    }
    set color(color) {
        this._color = color;
        console.log("ENTRAMOS SET")
    }


    acelerar(pVelocidad) { this.velocidad += pVelocidad; }
    frenar(pVelocidad) { this.velocidad -= pVelocidad; }


    mostrar() {
        return `Color:${this.color}. Marca:${this._marca}. Modelo:${this.modelo} . Velocidad:${this.velocidad}`
    }
}


let coche1 = new Coche("verde", "Toyota", "Celica");
let coche2 = new Coche("rojo", "Seat", "Altea");

// console.log(coche2.mostrar(), coche1.mostrar())
console.log(coche1.color)
