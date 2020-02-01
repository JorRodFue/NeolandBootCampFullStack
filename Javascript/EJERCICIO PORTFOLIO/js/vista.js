var seccionImagenes = document.querySelector("#imagenes")
var lateral = document.querySelector("#barralateral")

function pintarDatos(lista) {
    let contenido = ""
    seccionImagenes.innerHTML = ""
    console.log(lista.length)
    for (const objeto of lista) {
        // console.log(objeto)
        contenido += `<div id="imagen_${objeto.id}"  onclick="pincharImagen('${objeto.url}')">
       <img src="${objeto.thumbnailUrl}">
            <p>${objeto.title}</p>
            <p>Categoría : ${objeto.albumId}</p>

        </div>`
    }
    seccionImagenes.innerHTML = contenido

}

function pintarCategorias(lista) {
    let categorias = [];
    for (const elemento of lista) {
        if (!categorias.includes(elemento.albumId)) categorias.push(parseInt(elemento.albumId))
    }
    let contenido = `<p onclick="pintarDatos(datos)">TODO (${lista.length})</p><ul>`

    for (const categoria of categorias) {
        contenido += `<li data-id="${categoria}" onclick="pintarDatos(filtrarCategoria(${categoria})) ;resaltarCategoria(${categoria})">Categoria ${categoria} (${contarElementosdeCategoria(categoria, lista)})</li>`
    }
    contenido += `</ul > `

    lateral.innerHTML = contenido;
}


function resaltarCategoria(categoria) {

    let lisCategorias = lateral.querySelectorAll("li")
    for (const li of lisCategorias) {
        li.classList.remove("activa")
        if (li.dataset.id == categoria) li.classList.add("activa")
    }
}


function pincharImagen(url = "") {
    console.log("entramos imagen", url)
    let modal = document.querySelector("#modal")
    console.log(modal)

    modal.innerHTML = `"<img src="${url}" width="100%"">`
    // <p> ${objeto.title}</p >

    modal.classList.toggle("activo")
}
