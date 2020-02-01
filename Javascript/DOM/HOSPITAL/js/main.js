function filtrarEdad(matriz, edadMin = 0, edadMax = 99, condicion = true) {
    // let matrizsalida = new Array()
    // for (const paciente of matriz) {
    //     if (paciente.edad >= edadMin && paciente.edad <= edadMax && condicion) matrizsalida.push(paciente)
    //     if ((paciente.edad < edadMin || paciente.edad > edadMax) && condicion == false) matrizsalida.push(paciente)
    // }

    let matrizsalida = matriz.filter(function (paciente) {
        if (condicion == true) return (paciente.edad >= edadMin && paciente.edad <= edadMax)
        else {
            return (paciente.edad < edadMin || paciente.edad > edadMax)
        }
    })
    return matrizsalida
}


function filtrarEnfermedad(matriz, enfermedad) {
    let matrizsalida = new Array()
    for (const paciente of matriz) {
        if (paciente.diagnostico.toLowerCase() == enfermedad.toLowerCase()) matrizsalida.push(paciente)
    }
    return matrizsalida
}

function filtrarNumeroSS(matriz, numeroSS) {


    let matrizsalida = new Array()

    // PUSH
    for (const paciente of matriz) {
        if (paciente.numeroSegSoc[paciente.numeroSegSoc.length - 1] == numeroSS) matrizsalida.push(paciente)
    }
    return matrizsalida

    // FILTER
    matrizsalida = matriz.filter(paciente => {
        var ultimodigito = paciente.numeroSegSoc[paciente.numeroSegSoc.length - 1];
        return (ultimodigito == numeroSS)
    })
    return matrizsalida
}

function filtrarApellido(matriz, apellido) {
    let matrizsalida = new Array()
    for (const paciente of matriz) {
        if (paciente.apellido.toLowerCase() == apellido.toLowerCase()) matrizsalida.push(paciente)
    }
    return matrizsalida
}

function filtrarMedico(matriz, medico) {
    let matrizsalida = new Array()
    for (const paciente of matriz) {
        let especialistasMinusculas = arraytoMinusculas(paciente.especialistas);
        // ME INTERESA QUE LOS ELEMENTOS DEL ARRAY A COMPARAR SEAN EN MINUSCULAS
        if (especialistasMinusculas.includes(medico.toLowerCase())) matrizsalida.push(paciente)
    }
    return matrizsalida
}

function filtrarPorAtributo(matriz, atributo, valor) {
    let matrizsalida = new Array()
    for (const paciente of matriz) {
        if (paciente[atributo] == valor) matrizsalida.push(paciente)
    }
    return matrizsalida
}

// opcional convertir elementos de array a minusculas
function arraytoMinusculas(matriz) {

    for (elemento of matriz) {
        elemento = elemento.toLowerCase()
    }
    return matriz;
}

// VISTA
function mostrarPantalla(matrizEntrada) {

    let section = document.getElementById("pacientes");

    let i = 0;
    for (const elemento of matrizEntrada) {
        i++;
        var ul1 = document.createElement("ul");
        var li1 = document.createElement("li");

        var li2 = document.createElement("li");
        var li3 = document.createElement("li");
        var li4 = document.createElement("li");

        textoli1 = document.createTextNode("Diagnostico: " + elemento.diagnostico);
        textoli2 = document.createTextNode("Edad: " + elemento.edad);
        textoli3 = document.createTextNode("Numero SS: " + elemento.numeroSegSoc);
        textoli4 = document.createTextNode("Especialistas: " + elemento.especialistas.toString());

        li1.appendChild(textoli1)
        li2.appendChild(textoli2)
        li3.appendChild(textoli3)
        li4.appendChild(textoli4)
        ul1.appendChild(li1)
        ul1.appendChild(li2)
        ul1.appendChild(li3)
        ul1.appendChild(li4)

        var h3 = document.createElement("h3");
        textoh3 = document.createTextNode(elemento.nombre + " " + elemento.apellido)
        h3.appendChild(textoh3)
        var pacienteId = document.createElement("article")
        pacienteId.id = "paciente" + i;
        pacienteId.appendChild(h3);
        pacienteId.appendChild(ul1);

        section.appendChild(pacienteId)


        for (const key in elemento) {
            const valor = elemento[key];
            console.log(key + " : " + valor)

        }
    }
}

// < !-- < section id = "pacientes" >
//     <article id="paciente1">
//         <h3>Nombre y apellido del paciente</h3>
//         <ul>
//             <li>Diagnostico: Gripe</li>
//             <li>Edad: 38</li>
//             <li>Numero SS: A23456</li>
//         </ul>
//     </article>
// -->

// mostrarPantalla(filtrarEdad(listaDePacientes, 18, 25))
// mostrarPantalla(filtrarEnfermedad(listaDePacientes, "Fiebre"))
// mostrarPantalla(filtrarNumeroSS(listaDePacientes, "0"))

//mostrarPantalla(filtrarPorAtributo(listaDePacientes, "diagnostico", "Gripe"))
// mostrarPantalla(filtrarApellido(listaDePacientes, "Pérez"))
// mostrarPantalla(filtrarMedico(listaDePacientes, "general"))
// mostrarPantalla(filtrarEnfermedad(filtrarEdad(listaDePacientes, 0, 20), "Gripe"))


var pacientes1 = filtrarEdad(listaDePacientes, 0, 20)
var pacientes2 = filtrarEnfermedad(listaDePacientes, "Gripe")

let pacientesJoin = pacientes1.concat(pacientes2)
pacientesJoin = (eliminarDuplicados(pacientesJoin))
// console.log(pacientesfinal)
mostrarPantalla(pacientesJoin)



function eliminarDuplicados(lista) {

    let listafiltrada = new Array()
    for (const elemento of lista) {
        if (!listafiltrada.includes(elemento)) listafiltrada.push(elemento)
    }
    return listafiltrada;
}


//el ejercicio vale con que se resuelva con consola.

//trabajar con archivos a parte.

//El programa va a realizar las siguiente funcionalidades.

//sacara por pantalla todos los pacientes de entre 18 y 25 años. Posteriormente que tenga la posibilidad de sacar aquellos que no la cumpla.

//sacar por pantalla todos los pacientes que tengan gripe.

//sacar por pantalla todos los pacientes cuyo numero de la seguridad social acabe en 0.

// sacar por pantalla todos los pacientes que se apelliden Pérez

// sacar por pantalla todos los pacientes que tengan como especialista asignado medico de medicina general

//sacar por pantalla aquellos pacientes menores de 20 años que tengan gripe.