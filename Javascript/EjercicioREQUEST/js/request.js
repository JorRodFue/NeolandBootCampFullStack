var datos = new Array()
// var user

hacerRequest("https://reqres.in/api/users?page=1")
console.log(datos)

function hacerRequest(url) {

    var request = new XMLHttpRequest()
    //abir url para poder hacer la peticion
    request.open("GET", url, true)
    //envio
    request.send();
    request.addEventListener("readystatechange", cargarAgenda);
}

function cargarAgenda(event) {
    var paquete = event.target;
    if (paquete.readyState == 4 && paquete.status == 200) {
        var listaPost = new Array();
        listaPost = JSON.parse(paquete.response)
        datos = listaPost.data
        limpiarPagina()
        console.log(botoneraDiv.innerHTML)
        if (botoneraDiv.innerText == "") crearBotones(listaPost.total_pages)
        pintarLista(datos)
    }
}

function cargarUsuarioRequest(pId) {

    let url = "https://reqres.in/api/users/" + pId;
    var request = new XMLHttpRequest()
    //abir url para poder hacer la peticion
    request.open("GET", url)
    //envio
    request.send();
    request.addEventListener("readystatechange", function (event) {
        var paquete = event.target;
        if (paquete.readyState == 4 && paquete.status == 200) {
            var user = JSON.parse(paquete.response).data
            pintarUsuario(user)


        }
    });
}




