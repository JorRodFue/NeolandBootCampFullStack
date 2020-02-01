var url = "https://jsonplaceholder.typicode.com/posts"

var seccionNoticias = document.querySelector(".noticias")

var miJson = new XMLHttpRequest()
miJson.addEventListener("readystatechange", cargarArchivo);


//abir url para poder hacer la peticion
miJson.open("GET", url, true)

//envio

miJson.send();

function cargarArchivo(event) {
    var paquete = event.target;
    if (paquete.readyState == 4 && paquete.status == 200) {
        var listaPost = new Array();
        listaPost = JSON.parse(paquete.response)
        pintarPost(listaPost)
    }
}


function pintarPost(lista) {
    for (const objeto of lista) {
        for (const key in objeto) {
            console.log(key)
        }

        let contenido = `<article id="noticia_${objeto.id}">
            <h2>${objeto.title}</h2>
            <p>${objeto.body}</p>
        </article>`
        seccionNoticias.innerHTML += contenido
    }
}


