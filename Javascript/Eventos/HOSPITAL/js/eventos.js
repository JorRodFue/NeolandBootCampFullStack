var edadMinima = document.getElementById("edadMinima");
var edadMaxima = document.getElementById("edadMaxima");
var min = document.getElementById("min");
var max = document.getElementById("max");
var diag = document.getElementById("diag");

var apellidoInput = document.querySelector("#apellidoInput")
var apellidoButon = document.querySelector("#apellidoButon")

apellidoButon.addEventListener("click", buscarApellido)
apellidoInput.addEventListener("input", buscarApellido)


var enfermedad = document.getElementById("diagnostico");

for (var i = 1; i <= 100; i++) {
    edadMaxima.innerHTML += "<option value='" + i + "'>" + i + "</option>"
    max.innerHTML += "<option value='" + i + "'>" + i + "</option>"
}
let butonFiltrarEdad = document.getElementById("btnEdad");
let butonFiltrar = document.getElementById("filtrarTodo");


butonFiltrarEdad.addEventListener("click", filtrarEdadVista);
enfermedad.addEventListener("change", filtrarEnfermedadVista);

butonFiltrar.addEventListener("click", filtroCombinado)

function filtrarEdadVista(event) {
    let edadMinimaValue = edadMinima.value;
    let edadMaximaValue = edadMaxima.value;
    console.log(typeof (edadMinimaValue))
    mostrarPantalla(filtrarEdad(listaDePacientes, edadMinimaValue, edadMaximaValue))
}

function filtrarEnfermedadVista(event) {
    let diagnostico = event.target.value;
    if (diagnostico == "") { alert("Selecciona un diagnóstico válido") }
    else {
        mostrarPantalla(filtrarEnfermedad(listaDePacientes, diagnostico));
    }
}

function filtroCombinado(event) {

    let edadMinimaValue = parseInt(min.value);
    let edadMaximaValue = parseInt(max.value);
    let diagnostico = diag.value;

    if (diagnostico != "") {
        mostrarPantalla(filtrarEnfermedad(filtrarEdad(listaDePacientes, edadMinimaValue, edadMaximaValue), diagnostico))
    }
    else mostrarPantalla(filtrarEdad(listaDePacientes, edadMinimaValue, edadMaximaValue))
}

function buscarApellido(event) {
    let apellidoValue = apellidoInput.value
    console.log("ENTRAMOS")

    mostrarPantalla(filtrarApellido(listaDePacientes, apellidoValue))
}
