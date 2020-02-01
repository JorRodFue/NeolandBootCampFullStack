lista = $("ul.menu li a")
$("#marcador").animate({ "width": lista.first().css("width") }, 0)

// lista.css("color", "red")

lista.on("mouseenter", activarMarcador)

function activarMarcador(event) {
    event.preventDefault
    trigger = event.target
    console.log(event)
    let ancho = $(this).css("width")
    let position = $(this).offset().left;
    //var position = $(this).position().left;

    $("#marcador").stop()
    $("#marcador").animate({ "width": ancho, "left": position }, 500)
}

console.log(lista)