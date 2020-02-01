var vistaUsuarios = document.querySelector("#izquierdo")
var vistaUsuarioDerecha = document.querySelector("#derecho")
var botoneraDiv = document.querySelector("#botonera")


function pintarLista(lista) {
    for (const objeto of lista) {
        let contenido = `<ul id="usuario_${objeto.id}">
            <li onclick="conectarUsuario(${objeto.id})" data-id="${objeto.id}">${objeto.first_name} ${objeto.last_name}     <img src="${objeto.avatar}"/></li></ul>`
        vistaUsuarios.innerHTML += contenido
    }
}

function pintarUsuario(user) {
    vistaUsuarioDerecha.innerHTML = ""
    console.log("Entramos en pintar")
    let contenido = `<ul id="usuario_${user.id}">
    <li>Nombre : ${user.first_name} ${user.last_name}</li>
    <li>Email : ${user.email}</li>
    <li><img src="${user.avatar}"/></li></ul>`
    vistaUsuarioDerecha.innerHTML += contenido
    console.log("VISTA USER")
    console.log(user)
}

function limpiarPagina() {
    vistaUsuarios.innerHTML = ""
}

function crearBotones(n) {

    for (let i = 1; i <= n; i++) { botoneraDiv.innerHTML += `<button onclick=pagina(${i})>${i}</button>` }
}

