var mario = document.querySelector("#runner img")
padremario = document.querySelector("#runner")
document.addEventListener("keydown", saltar)
document.addEventListener("keyup", soltar)
let posicionX = 0;
// disparar y matar
var movEscenario = setInterval(moverEscenario, 100);
var enemigos = setInterval(crearMalo, 1000 + Math.random() * 4000);
let dibujarX = document.getElementById("coordenadas")

var inicio = 0;
var escenario = document.getElementById("escenario")
function moverEscenario() {
    inicio -= 10
    escenario.style.backgroundPositionX = inicio + "px"

}
function crearMalo() {
    let malo = document.createElement("div");
    var avanceMalo = 0;
    malo.className += ("malo")
    escenario.appendChild(malo);
    // malo.setAttribute("avanceMalo", 0);
    clearInterval(enemigos)
    enemigos = setInterval(crearMalo, 1000 + Math.random() * 10000);

    var intervaloBicho = setInterval(function () {

        avanceMalo -= 22;
        malo.style.marginLeft = avanceMalo + "px"
        console.log(avanceMalo)
        detectarColision(posicionX, avanceMalo)
        dibujarX.innerHTML = "MARIO X : " + posicionX + " ENEMIGO X :" + avanceMalo

        if (avanceMalo < -666) {
            escenario.removeChild(malo)
            clearInterval(intervaloBicho);
        }
    }, 500
    )
}
function saltar(event) {
    switch (event.keyCode) {
        case 32: mario.src = "images/salto.gif"
            mario.style.display = "inline-block"
            mario.style.paddingBottom = "200 px"

            break
        case 39:
            posicionX = posicionX + 10
            padremario.style.marginLeft = posicionX + "px"
            break
        case 37:
            posicionX -= 10
            padremario.style.marginLeft = posicionX + "px"
            break
    }
}

function soltar(event) {
    if (event.keyCode == 32) {
        mario.src = "images/mario.gif"
        mario.style.paddingBottom = "0 px"
    }

}

function detectarColision(posicionMario, posicionEnemigo) {
    if (posicionMario == 800 - posicionEnemigo) { alert("Has perdido una vida") }

}

