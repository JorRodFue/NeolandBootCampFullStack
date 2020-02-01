var vista = document.querySelector("#tareas")
mostrarDatos(listaTareas)

function mostrarDatos(lista) {
    var texto = "";
    for (elemento of lista) {
        texto +=
            `<article class="${elemento.prioridad}" data-id="${elemento.id}">
            <h2>${elemento.titulo}</h2>
            <a href="#" title="Eliminar" onclick="borrarTarea(${elemento.id});">Eliminar</a>
        </article>`
    }
    vista.innerHTML = texto;
}
function mostrarTarea(elemento) {
    // var texto =
    //     `<article class="${elemento.prioridad}" data-id="${elemento.id}">
    //         <h2>${elemento.titulo}</h2>
    //         <a href="#" title="Eliminar" onclick="borrarTarea(${elemento.id});">Eliminar</a>
    //     </article>`
    // vista.innerHTML += texto;


    //ALTERNATIVA CREANDO NODO
    var inyectar = document.createElement("article")
    inyectar.className += (elemento.prioridad)
    inyectar.setAttribute("data-id", elemento.id);
    inyectar.innerHTML += "<h2>" + elemento.titulo + "</h2>"
    inyectar.innerHTML += '<a href="#" title="Eliminar" onclick="borrarTarea(' + elemento.id + ')">Eliminar</a> </article >'
    vista.appendChild(inyectar)


}

function borrarTareaVista(tareaABorrar) {
    var data = "[data-id='" + tareaABorrar.id.toString() + "']"
    var tarea = document.querySelector(data)
    tarea.parentNode.removeChild(tarea)
}
