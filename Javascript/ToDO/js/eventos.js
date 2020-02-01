var tareaInput = document.querySelector("#tituloTarea")
var prioridadSelect = document.querySelector("#prioridad")
var guardarSubmit = document.querySelector("#guardar")

guardarSubmit.addEventListener("click", pulsarGuardar)

var tareaFilter = document.querySelector("#search")
var prioridadFilter = document.querySelector("#prioridadFilter")

prioridadFilter.addEventListener("change", filtrarPrioridadVista)
tareaFilter.addEventListener("input", filtrarTextoVista)

function pulsarGuardar(event) {
    event.preventDefault
    document.querySelector("#mensaje").innerHTML = ""
    var tareaValue = tareaInput.value
    var prioridadValue = prioridadSelect.value
    if (prioridadValue == "") document.querySelector("#mensaje").innerHTML = "PRIORIDAD NO PUEDE SER VACIO"
    if (tareaValue == "") document.querySelector("#mensaje").innerHTML = "NOMBRE NO PUEDE SER VACIO"
    else {
        tarea = guardarTarea(tareaValue, prioridadValue)
        if (prioridadSelect.value == prioridadFilter.value) mostrarTarea(tarea)
        else {
            mostrarDatos(listaTareas)
            prioridadSelect.value = ""
        }
    }
}
function filtrarPrioridadVista(event) {
    var filtroPrioridad = prioridadFilter.value;
    if (filtroPrioridad != "")
        mostrarDatos(filtrarPrioridad(listaTareas, filtroPrioridad))
    else mostrarDatos(listaTareas)
}
function filtrarTextoVista(event) {
    var filtroTexto = tareaFilter.value;
    mostrarDatos(filtrarTexto(listaTareas, filtroTexto))
}




