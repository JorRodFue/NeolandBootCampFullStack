let botonMenu = $(".boton");
botonMenu.on("click", slideMenu)

var cerrado = true;

function slideMenu() {
    // $("header nav").slideToggle(400);
    if (cerrado) {
        $("header nav").slideDown(400);
    }
    else {
        $("header nav").slideUp(400);
    }
    cerrado = !cerrado;
}