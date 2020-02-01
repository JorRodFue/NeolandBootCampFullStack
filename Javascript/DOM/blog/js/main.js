
// for (const noticia of listanoticias) {
//     i++
//     contenido += ` 
//     <article id="noticia${i}" class="noticia">
//     <h3>${noticia.titulo}</h3>
//     <div class="imagen">
//         <img src="${noticia.urlImagen}" alt="imagen" />
//     </div>
//     <div class="texto">
//         <p>${noticia.textoNoticia}</p>
//     </div>
//     </article>`
// };
// seccion.innerHTML = contenido;

cargarNoticias(listanoticias)

borrarNoticia("2");

function borrarNoticia(id) {
    let articuloAborrar = document.getElementById("noticia" + id)
    articuloAborrar.parentNode.removeChild(articuloAborrar)
    listanoticias.splice(id, 1);
}

function cargarNoticias(listanoticias) {

    var i = 0;
    var contenido = ""
    let seccion = document.getElementById("noticias")

    for (const noticia of listanoticias) {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(noticia.textoNoticia)
        parrafo.appendChild(texto)
        var divTexto = document.createElement("div");
        divTexto.className = "texto";
        divTexto.appendChild(parrafo)

        var divImagen = document.createElement("div");
        divImagen.className = "imagen";
        var imagen = document.createElement('img')
        imagen.src = noticia.urlImagen;
        divImagen.appendChild(imagen)

        var tituloNoticia = document.createElement("h3");
        var textotitulo = document.createTextNode(noticia.titulo);
        tituloNoticia.appendChild(textotitulo)

        //crear el articulo y meter todos los elementos en riguroso orden

        var articulo = document.createElement("article")
        articulo.id = "noticia" + i;
        articulo.className = "noticia"
        articulo.appendChild(tituloNoticia)
        articulo.appendChild(divImagen)
        articulo.appendChild(divTexto)

        seccion.appendChild(articulo)

        i++;
    }
}