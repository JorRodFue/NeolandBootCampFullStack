let botones = document.querySelectorAll("header ul li a");
for (const boton of botones) { boton.addEventListener("click", clickOnTab) }
var tabs = document.querySelectorAll(".tabs");
function clickOnTab(event) {
    event.preventDefault();
    for (tab of tabs) {
        tab.style.display = "none"
        tab.style.opacity = "0"

        // OCULTO TODAS DEL TIRON PARA NO ANDAR CON MIRAMIENTOS
    }
    // let pinchado = event.target.dataset.id;
    // document.getElementById(pinchado).style = "display:block";

    //HACIENDO A LO JAVA CON GETTER Y SETTER
    let pinchado = document.getElementById(event.target.getAttribute("data-id"))
    setTimeout(function () { pinchado.style.opacity = "1" }, 20)

    pinchado.style.display = "block"
    // document.getElementById(pinchado).setAttribute("display", "block");
    // document.getElementById(pinchado).setAttribute("opacity", "1");



}
