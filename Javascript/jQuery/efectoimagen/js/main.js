var imagen = $(".contenedor")

// imagen.on("mouseover", entrar).on("mouseout", salir)

imagen.hover(entrar, salir)

function entrar() {
    // var ancho = $(this).width JQUERY

    var ancho = this.clientWidth;
    var alto = this.clientHeight;
    $(this).find(".info").stop().animate({ "top": alto / 4 * 3 + "px", duration: 200, queue: false })
    $(this).find(".imagen").addClass("rotateScale")
}
function salir() {
    $(this).find(".info").stop().animate({ "top": "100%", duration: 200, queue: false })
    $(this).find(".imagen").removeClass("rotateScale")


}

// hacer rollover salga por abajo y se quede a media pista