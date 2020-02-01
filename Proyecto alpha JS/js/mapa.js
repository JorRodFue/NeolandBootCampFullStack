var momento;
var L = window.L;


function limpiarMapa() {
    mymap.off();
    mymap.remove();
}

function irAEvento(evento) {
    if (evento.location != undefined && evento != null) {
        console.log(evento.location);
        y = evento.location.latitude;
        x = evento.location.longitude;

        console.log(y, x)

        mymap = L.map('mapid').setView([y, x], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mymap);
        // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        //     maxZoom: 18,
        //     id: 'mapbox.streets',
        //     accessToken: 'pk.eyJ1IjoiZm9yYXR1bCIsImEiOiJjazI5YnFtNWIyaHcxM2lucnd5ZTJuZWd3In0._XB0qU2AeBff9ThO003CFw'
        // }).addTo(mymap);
        generarMarker(y, x, evento)
        mymap.on('click', onMapClick);
        for (const dato of datos) {
            if (dato.location != undefined && dato != null) generarMarker(dato.location.latitude, dato.location.longitude, dato)
        }
    }
}



function generarMapa() {

    mymap = L.map('mapid').setView([40.42, -3.70], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //     maxZoom: 18,
    //     id: 'mapbox.streets',
    //     accessToken: 'pk.eyJ1IjoiZm9yYXR1bCIsImEiOiJjazI5YnFtNWIyaHcxM2lucnd5ZTJuZWd3In0._XB0qU2AeBff9ThO003CFw'
    // }).addTo(mymap);
    mymap.on('mousedown', onMapClick);

}

function recorrerObjeto(objeto) {
    let texto = ""
    for (const key in objeto) {
        console.log(key, objeto[key])
        if (objeto[key] != "__proto__" && objeto.hasOwnProperty(key) && objeto[key] != undefined) {
            texto += ((typeof (objeto[key])).toLowerCase() == "object") ? `<b> ${key}:</b> ` + recorrerObjeto(objeto[key]) : `<b> ${key}:</b> ` + objeto[key] + "</br>"
        }
    }

    return texto;
}

function dibujarLista(lista) {
    for (const elemento of lista) {
        textoMarker(elemento, dibujarMarker(elemento))

    }
}

function dibujarMarker(objeto) {
    if (objeto.location != undefined) {
        y = objeto.location.latitude;
        x = objeto.location.longitude;
        marker = L.marker([y, x]).addTo(mymap);
    }
    return marker;

}
function textoMarker(objeto, marker) {
    var texto = (objeto.link != undefined) ? `<a href = "${objeto.link}"> enlace link</a> ` : (objeto.relation != undefined) ? ` <a href = "${objeto.relation}"> enlace relation</a> ` : ""
    texto += "<br>" + recorrerObjeto(objeto);
    marker.bindPopup(texto)
    // marker.bindPopup(texto).openPopup();

}


function generarCirculo(y, x, radio = 1000) {
    var circle = L.circle([y, x], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: radio
    }).addTo(mymap);
    circle.bindPopup("I am a circle.");

}
function generarPoligono() {

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);
    polygon.bindPopup("I am a polygon.");

}
function generarPopup() {
    var popup = L.popup()
        .setLatLng([51.5, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(mymap);
}



function onMapClick(event) {
    momento = Date.now()
    var popup = L.popup();
    popup
        .setLatLng(event.latlng)
        .setContent("You clicked the map at " + event.latlng.toString())
        .openOn(mymap);

    generarCirculo(event.latlng.lat, event.latlng.lng, Date.now() - momento)

    // mymap.on("clcik", onMapClickUp)
}

function onMapClickUp(event) {
    radio = Date.now() - momento
    generarCirculo(event.latlng.lat, event.latlng.lng, radio * 8)
    mymap.off("mouseup")

}

generarMapa()
