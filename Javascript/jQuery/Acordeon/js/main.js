var faq = $(".faq h2")

faq.on("click", desplegar)


function desplegar() {
    console.log($(this))

    // opcion 1
    // $(this).next().slideToggle(400);

    // opcion2
    var contenido = $(this).next()


    $(".faq p").slideUp(400)
    $(".faq h2").removeClass("titulo")

    if (contenido.css("display") == "none") {
        //despliegue
        contenido.slideDown(200);
        contenido.prev().addClass("titulo")
    }
    //
    else {
        // repliegue
        contenido.slideUp(200);


    }
}