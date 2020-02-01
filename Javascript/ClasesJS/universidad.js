class Profesor {

    constructor(nombre, apellidos, experiencia) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.experiencia = experiencia;
    }
    mostrarProfesor() {
        return `PROFESOR : nombre: ${this.nombre} apellidos: ${this.apellidos}  experiencia:${this.experiencia} \n)`
    }
}

class Asignatura {
    constructor(nombre, Profesor) {
        this.nombre = nombre;
        this.profesor = Profesor;
    }

    mostrarAsignatura(conProfesor) {
        let retorno = "Asignatura " + this.nombre;
        return (conProfesor == true) ? retorno + " \n Impartida por: " + this.profesor.mostrarProfesor() : retorno

    }
}

class Estudiante {

    constructor(nombre, apellidos) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.asignaturas = new Array()
    }

    agregarAsignatura(asignatura) {
        this.asignaturas.push(asignatura)
    }

    mostrarEstudiante() {
        let texto = "Alumno: Nombre : " + this.nombre + " Apellidos : " + this.apellidos + "\n"
        for (const asignatura of this.asignaturas) {
            texto += "Está cursando : " + asignatura.mostrarAsignatura(true) + "\n";
        }
        return texto
    }
}

class Universidad {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = new Array();

    }
    agregarAlumno(alumno) {
        this.alumnos.push(alumno)
        return "exito en agregacion";

    }

    obtenerAlumnosAsignatura(asignaturaP) {
        let cantidad = 0;
        for (const alumno of this.alumnos) {
            for (const asignatura of alumno.asignaturas) {
                if (asignatura.nombre == asignaturaP) cantidad++
            }
        }
        return cantidad;

    }
    mostrarUniversidad() {
        let texto = "";
        texto += "Universidad Nombre + :" + this.nombre + "   "
        for (const estudiante of this.alumnos) {
            texto += estudiante.mostrarEstudiante() + "\n";
        }
        return texto;


    }
}

let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)
// console.log(profesor1.mostrarProfesor())
// console.log(profesor2.mostrarProfesor())

let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)
// console.log(algebra.mostrarAsignatura(false))
// console.log(electronica.mostrarAsignatura(true))
// console.log(fisica.mostrarAsignatura(true))

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')
estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)
// console.log(estudiante1.mostrarEstudiante())
// console.log(estudiante2.mostrarEstudiante())
// console.log(estudiante3.mostrarEstudiante())

let uni1 = new Universidad('UC3M')
uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)
estudiante2.nombre = "PEPE"
estudiante3.nombre = "PEPE"

console.log(uni1.mostrarUniversidad())
console.log(uni1.obtenerAlumnosAsignatura('Electrónica'))