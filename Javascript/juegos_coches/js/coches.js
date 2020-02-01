var ferrari = document.getElementById("ferrari");
var mercedes = document.getElementById("mercedes");
var mclaren = document.getElementById("mclaren");

var avanceFerrari = 0;
var avanceMercedes = 0;
var avanceMcLaren = 0;

var nitros = 3;
var posicionFinal = 675;
// eventos de teclado los lanza el document.

var intMer = setInterval(moverMercedes, 500);
var tiempointervalo = Math.random() * 1000
var intMac = setInterval(moverMclaren, tiempointervalo);
var intervalos = [intMer, intMac]



document.addEventListener("keydown", acelerarFerrari)

function acelerarFerrari(event) {
    //que tecla estoy tocando
    switch (event.keyCode) {
        case 32:
            //avanzar el ferrari
            avanceFerrari += 15;
            break;
        case 78:
            if (nitros > 0) {
                avanceFerrari += 40;
                nitros--
            }
            break;
    }
    // oxido nitroeso
    dibujarFerrari(avanceFerrari)
}

function dibujarFerrari(avanceFerrari) {
    if (avanceFerrari <= posicionFinal) { ferrari.style.marginLeft = avanceFerrari + "px" }
    else {
        document.getElementById("mensaje").innerText = "Ha ganado Ferrari"
        carreraAcabada()
    }
}

function moverMercedes() {
    mercedes.style.marginLeft = avanceMercedes + "px"

    if (avanceMercedes <= posicionFinal) {
        avanceMercedes += 20;
    }
    else {
        document.getElementById("mensaje").innerText = "Ha ganado Mercedes";
        carreraAcabada()
    }
}

function moverMclaren() {
    mclaren.style.marginLeft = avanceMcLaren + "px"
    tiempointervalo = Math.random() * 1000


    if (avanceMcLaren <= posicionFinal) {
        avanceMcLaren += 10;
    }
    else {
        document.getElementById("mensaje").innerText = "Ha ganado McLaren";
        carreraAcabada()
    }
}

function carreraAcabada() {
    document.removeEventListener("keydown", acelerarFerrari)
    for (intervalo of intervalos) { clearInterval(intervalo) }

}



