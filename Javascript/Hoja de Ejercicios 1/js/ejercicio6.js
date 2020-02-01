function dameNumero() {

    var numero = parseFloat(prompt("Dame nota"));
    numero = (isNaN(numero)) ? 0 : numero;
    return numero;
}

function notaATexto(nota) {
    switch (true) {
        case (nota < 5): {
            resultado = "suspenso"
            break
        }
        case (nota < 6): {
            resultado = "aprobado"
            break
        }
        case (nota < 7): {
            resultado = "bien"
            break
        }
        case (nota < 9): {
            resultado = "notable"
            break
        }
        case (nota <= 10): {
            resultado = "notable"
        }
        default: {
            resultado = "otros"
        }
    }
    return resultado
}

function resultado(entrada) {
    let salida = document.getElementById("resultado");
    salida.innerHTML = entrada;
}

resultado(notaATexto(dameNumero()))
