document.getElementById("Select").addEventListener("change", seleccion1);


function seleccion1() {

    let seccion2 = document.getElementById("seccion2")
    seccion2.classList.remove("oculta"); console.log("S1")
    seleccion2()
}

function seleccion2() {
    let seleccion1 = document.getElementById("Select")
    let seleccion2 = document.getElementById("postre")

    let plato = seleccion1.value;
    let postre = seleccion2.elements["postre"].value;
    console.log(plato, postre)
    calcularPrecio(plato, postre)
}

function calcularPrecio(plato, postre) {
    plato = plato.toLowerCase();
    let precio = 0;
    switch (plato) {
        case "carne":
            precio = 23;
            break
        case "pescado":
            precio = 15;
            break
    }
    precio = (postre == "SI") ? precio + 3 : precio;
    precio = precio * 1.06;
    mostrarPrecio(precio);
}

function mostrarPrecio(precio) {
    salida = document.getElementById("precio");
    salida.innerHTML = precio;
}
