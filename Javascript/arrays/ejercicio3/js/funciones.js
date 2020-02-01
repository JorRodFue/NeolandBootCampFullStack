console.log(razas.peligrosidad)

// quiero que me saqueis por pantalla aquellos perros cuya razo es considerada peligrosa

function esPeligroso(lista, atributo = true) {
    // console.log("entramos")
    let listafiltrada = new Array()
    lista.forEach(elemento => {
        if (elemento.peligrosidad == atributo) {
            // listafiltrada[listafiltrada.length] = elemento
            listafiltrada.push(elemento)
        }
    });
    return listafiltrada;
}

function mostrarlista(listafiltrada) {
    let contenido = "";
    for (elemento of listafiltrada) {

        // contenido += "<div><h3>" + elemento.raza + "</h3><ul><li>longitud:" + elemento.longitud + "</li><li>peso:" + elemento.peso + "</li><li>Peligrosidad:" + elemento.peligrosidad + "</li><li>color:" + elemento.color + "</li></ul></div><hr>"
        contenido += `
        <div>
        <h3>${elemento.raza}</h3>
        <ul>
            <li>longitud:<strong>${elemento.longitud}</strong></li>
            <li>longevidad:<strong>${elemento.longevidad}</strong></li>
            <li>peso:<strong>${elemento.peso}</strong></li>
            <li>peligrosidad:<strong>${elemento.peligrosidad}</strong></li>
            <li>color:<strong>${elemento.color}</strong></li>
        </ul>
        </div>
        <hr>`;
    }

    document.write(contenido)
}


// filtrar entre un valor de peso maximo y minimo

function filtrarPeso(lista, pesomaximo, pesominimo) {
    var listafiltrada = new Array();
    lista.forEach(elemento => {
        if (elemento.peso >= pesominimo && elemento.peso <= pesomaximo) listafiltrada.push(elemento)
    });
    return listafiltrada;
}

mostrarlista(filtrarPeso(razas, 50, 30));

// mostrarlista(esPeligroso(razas));

