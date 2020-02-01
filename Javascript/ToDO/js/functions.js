function guardarTarea(nombreTarea, prioridadTarea) {


    var elemEncontrado = listaTareas.find(function (item) {
        return nombreTarea === item.titulo;
    });
    if (!elemEncontrado) {
        // Si no está agrego un nuevo elemento
        var tarea = {}
        claves++
        tarea.id = claves;
        tarea.titulo = nombreTarea
        tarea.prioridad = prioridadTarea
        listaTareas.push(tarea)
        return tarea
    } else {
        // BORRO SU LUGAR EN EL HTML
        borrarTareaVista(elemEncontrado)
        elemEncontrado.prioridad = prioridadTarea;
        return elemEncontrado
    }
}

function borrarTarea(pId) {
    var tareaBorrada = listaTareas.find(function (tarea) { return tarea.id == pId })
    var idTarea = listaTareas.indexOf(tareaBorrada)
    listaTareas.splice(idTarea, 1);


    borrarTareaVista(tareaBorrada)
    // BORRO SU LUGAR EN EL HTML POR VISTA

    // mostrarDatos(listaTareas)
}

function filtrarPrioridad(lista, prioridad) {

    let matrizfiltrada = new Array()
    for (const elemento of lista) {
        if (elemento.prioridad == prioridad) matrizfiltrada.push(elemento)
    }
    return matrizfiltrada
}

function filtrarTexto(lista, texto) {
    let matrizfiltrada = new Array()
    for (const elemento of lista) {
        if (elemento.titulo.toUpperCase().includes(texto.toUpperCase())) matrizfiltrada.push(elemento)
    }
    return matrizfiltrada
}