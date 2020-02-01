var articulo = $(".trabajos article");

articulo.on("click", cargarModal)
function cargarModal() {
    var altodelBoton = $(window).scrollTop() + 60

    $("body").append(`<div class="modal" >
     <div class="manto">
         <div class="contenedor">
             <img src="${$(this).find("img").attr("src")}">
                 <h4>${$(this).find("h4").text()}</h4 >
    <h3>${$(this).find("h3").text()}</h3>
    <i class="cruz fas fa-times-circle" onclick="cerrar"></i>
    
     </div >
         </div >
     </div > `)

    $(".modal").fadeIn(400)
    $(".modal .contenedor").animate({ "top": altodelBoton + "px" }, 400)
    $(".modal .manto").css("height", document.body.clientHeight)
    $(".modal .cruz").on("click", cerrar)
    $(document).on("keydown", cerrar)

}

function cerrar(event) {
    if (event.keyCode == 27 || event.type == "click") {
        $(".modal").fadeOut(400)
        $(".modal").remove()
    }
}
