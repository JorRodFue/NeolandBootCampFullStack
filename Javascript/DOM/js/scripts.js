var parrafos = document.getElementsByTagName("p");
// for (const elemento of parrafos) {

//     elemento.innerHTML += " escribo mierdas"
//     // elemento.innerText = "solo texto"
//     // innerText solo el texto y se carga el html
// }

Array.from(parrafos).forEach(element => {
    element.innerHTML = "for Eachs"
}

);


var lis = document.getElementsByTagName('li');
var tercerLi = lis[2];

var enlace = tercerLi.getElementsByTagName("a")
enlace[0].innerHTML = "Enlace cambiado"

