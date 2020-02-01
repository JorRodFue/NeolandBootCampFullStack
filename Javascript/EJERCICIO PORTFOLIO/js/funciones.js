
function contarElementosdeCategoria(categoria, lista) {
    let veces = 0;
    for (let i = 0; i < lista.length; i++) {
        if (categoria == lista[i].albumId) veces++
    }
    return veces

}

function filtrarCategoria(categoria) {
    return (categoria == 0) ? datos : datos.filter(function (item) { return item.albumId == categoria })
    // devuelve una lista con los elementos de la categoria
}
