var url = "https://jsonplaceholder.typicode.com/photos"
var datos = []

hacerRequest(url)

function hacerRequest(url) {

    var miJson = new XMLHttpRequest()
    miJson.addEventListener("readystatechange", cargarArchivo);

    //abir url para poder hacer la peticion
    miJson.open("GET", url, true)

    //envio

    miJson.send();

    function cargarArchivo(event) {
        var paquete = event.target;
        if (paquete.readyState == 4 && paquete.status == 200) {
            datos = JSON.parse(paquete.response)
            let defaultCategoria = 1;
            pintarCategorias(datos)
            resaltarCategoria(defaultCategoria)
            pintarDatos(filtrarCategoria(defaultCategoria))
            console.log("inicializado")
        }
    }
}


