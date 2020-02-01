var escenario = document.querySelector('.escenario')
var movimientoEscenario = 0;

var mario = document.querySelector('#runner img');
var pasosMario = 0;
var marioMirando = "derecha"
// CREO ESTA VARIABLE PARA SIMPLIFICAR COSAS


var tiempoIntervalo = 1000 + Math.random() * 3000;
var aparicionMalo = setInterval(sacarMalo, tiempoIntervalo)

var aparicionTubo = setTimeout(sacarTubo, 20000);

var intervaloEscenario = setInterval(moverEscenario, 90)
// le cambiamos el nombre para ser mas descritptivo


document.addEventListener('keyup', bajarMario)
document.addEventListener('keydown', accionesMario)
// IMPORTANTE!!!
// no hace falta definir una funcion para cada accion keydown, llamamos a una comun y que el switch decida

function accionesMario(e) {
    // DISPARAR
    switch (e.keyCode) {
        case 32:

            var disparo = document.createElement('div');
            disparo.className = 'disparo';
            var avanceDisparo = mario.offsetLeft + 210;
            disparo.style.left = avanceDisparo + 'px';
            var descensoDisparo = mario.offsetTop + 520;
            disparo.style.top = descensoDisparo + 'px';
            escenario.appendChild(disparo);

            if (marioMirando == "derecha") {
                var intervaloDisparo = setInterval(function () {
                    if (avanceDisparo < 800) {
                        avanceDisparo += 40;
                        disparo.style.left = avanceDisparo + 'px';
                    }
                    else {
                        disparo.parentNode.removeChild(disparo);
                        clearInterval(intervaloDisparo)
                    }
                }, 100)

                break;
            }
            if (marioMirando == "derecha" && mario.style.bottom == '130px') {
                var intervaloDisparo = setInterval(function () {
                    if (avanceDisparo < 800) {
                        avanceDisparo += 40;
                        descensoDisparo += 15;
                        disparo.style.top = descensoDisparo + 'px';
                        disparo.style.left = avanceDisparo + 'px';
                    }
                    else {
                        disparo.parentNode.removeChild(disparo);
                        clearInterval(intervaloDisparo)
                    }

                }, 100)

                break;
            }
            if (marioMirando == "izquierda") {
                var intervaloDisparo = setInterval(function () {
                    if (avanceDisparo > -800) {
                        avanceDisparo -= 40;
                        disparo.style.left = avanceDisparo + 'px';
                    }
                    else {
                        disparo.parentNode.removeChild(disparo);
                        clearInterval(intervaloDisparo)
                    }

                }, 100)

                break;
            }
            if (marioMirando == "izquierda") {
                var intervaloDisparo = setInterval(function () {
                    if (avanceDisparo < 800) {
                        avanceDisparo -= 40;
                        descensoDisparo += 15;
                        disparo.style.top = descensoDisparo + 'px';
                        disparo.style.left = avanceDisparo + 'px';
                    }
                    else {
                        disparo.parentNode.removeChild(disparo);
                        clearInterval(intervaloDisparo)
                    }

                }, 100)

                break;
            }
        // SALTAR
        case 38:
            mario.src = 'images/salto.gif';
            mario.style.bottom = '130px';
            break;
        //AVANZAR
        case 39:
            pasosMario += 30;
            mario.src = 'images/mario.gif';
            mario.style.left = pasosMario + 'px';
            mario.style.transform = 'rotateY(0deg)';
            marioMirando = "derecha"
            break;
        //RETROCEDER
        case 37:
            pasosMario -= 30;
            mario.style.left = pasosMario + 'px';
            mario.src = 'images/mario.gif';
            mario.style.transform = 'rotateY(180deg)';
            marioMirando = "izquierda"

            break;
    }
}


function moverEscenario() {
    if (movimientoEscenario >= -2335) {
        movimientoEscenario -= 10;
        escenario.style.backgroundPosition = movimientoEscenario + 'px -150px';
    }
    else {
        clearInterval(intervaloEscenario)
    }
}

function bajarMario(e) {
    switch (e.keyCode) {
        case 38:
            mario.src = 'images/mario.gif';
            mario.style.bottom = '0px';
            break;
    }
}


function sacarMalo() {
    clearInterval(aparicionMalo)
    tiempoIntervalo = 1000 + Math.random() * 3000
    aparicionMalo = setInterval(sacarMalo, tiempoIntervalo)
    // PARA QUE SEA REALMENTE ALEATORIO TENGO QUE DESTRUIR EL INTERVALO Y VOLVERLO A CREAR CADA VEZ PARA QUE ME COJA UN Math.Random distinto


    var malo = document.createElement('div');

    var avanceMalo = 0;
    malo.className = 'malo';
    contadorId = 1;
    malo.id = 'malo' + contadorId;
    contadorId++;

    escenario.appendChild(malo);
    var intervaloBicho = setInterval(function () {
        if (avanceMalo < 900) {
            avanceMalo += 15;
            malo.style.marginRight = avanceMalo + 'px';
        }
        else {
            malo.parentNode.removeChild(malo);
            clearInterval(intervaloBicho)
        }

    }, 100)
}

function sacarTubo() {
    clearInterval(aparicionMalo)
    //  cuando sale el tubo quiero que dejen de salir malos, recordar que tenemos que parar el INTERVALO, no la funcion que se llama en dicho intervalo

    var tubo = document.createElement('div');
    var avanceTubo = 0;
    tubo.className = 'tubo';

    escenario.appendChild(tubo);
    var intervaloTubo = setInterval(function () {
        while (avanceTubo < 200) {
            avanceTubo += 15;
            tubo.style.marginRight = avanceTubo + 'px';
        }
        // MEJOR CON UN WHILE
        clearInterval(intervaloEscenario)
        //  cuando sale el tubo quiero que deje de moverse el escenario

        clearInterval(intervaloTubo)



    }, 100)
}

// Eliminar a los bichos -> Darles ID meterlos en array y jugar con altura y anchura para remove child.


