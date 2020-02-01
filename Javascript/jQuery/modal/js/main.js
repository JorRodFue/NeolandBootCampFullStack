var boton = $(".boton");
boton.on("click", desplegar)


function desplegar() {
    console.log("entramos")
    var menu = $("#menu")
    menu.toggleClass("desplegar")
}