function filtrarEdad(matriz, edadMin = 0, edadMax = 99, condicion = true) {
    let matrizsalida = new Array()
    for (const paciente of matriz) {
        if (paciente.edad >= edadMin && paciente.edad <= edadMax && condicion)
            matrizsalida.push(paciente)
        if ((paciente.edad < edadMin || paciente.edad > edadMax) && condicion == false)
            matrizsalida.push(paciente)
    }
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
    for (const paciente of matriz) {
        if (paciente.numeroSegSoc[paciente.numeroSegSoc.length - 1] == numeroSS) matrizsalida.push(paciente)
    }
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

// opcional convertir elementos de array a minusculas
function arraytoMinusculas(matriz) {

    for (elemento of matriz) {
        elemento = elemento.toLowerCase()
    }
    return matriz;
}

// VISTA
function mostrarPantalla(matrizEntrada) {

    for (const alumno of matrizEntrada) {
        for (const key in alumno) {
            const element = alumno[key];
            console.log(key + " : " + element)

        }
    }
}

mostrarPantalla(filtrarEdad(listaDePacientes, 18, 25))
mostrarPantalla(filtrarEnfermedad(listaDePacientes, "Fiebre"))
mostrarPantalla(filtrarNumeroSS(listaDePacientes, "0"))

mostrarPantalla(filtrarApellido(listaDePacientes, "Pérez"))
mostrarPantalla(filtrarMedico(listaDePacientes, "general"))
mostrarPantalla(filtrarEnfermedad(filtrarEdad(listaDePacientes, 0, 20), "Gripe"))






//el ejercicio vale con que se resuelva con consola.

//trabajar con archivos a parte.

//El programa va a realizar las siguiente funcionalidades.

//sacara por pantalla todos los pacientes de entre 18 y 25 años. Posteriormente que tenga la posibilidad de sacar aquellos que no la cumpla.

//sacar por pantalla todos los pacientes que tengan gripe.

//sacar por pantalla todos los pacientes cuyo numero de la seguridad social acabe en 0.

// sacar por pantalla todos los pacientes que se apelliden Pérez

// sacar por pantalla todos los pacientes que tengan como especialista asignado medico de medicina general

//sacar por pantalla aquellos pacientes menores de 20 años que tengan gripe.