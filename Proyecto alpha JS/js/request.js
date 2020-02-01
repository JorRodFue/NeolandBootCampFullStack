var datos = new Array()

var jsones = [{ nombre: "Actividades Culturales y de Ocio Municipal en los próximos 100 días", url: "https://datos.madrid.es/egob/catalogo/206974-0-agenda-eventos-culturales-100.json" },
{ nombre: "Actividades gratuitas en Bibliotecas Municipales en los próximos 60 días", url: "https://datos.madrid.es/egob/catalogo/206717-0-agenda-eventos-bibliotecas.json" },
{ nombre: "Agenda de actividades deportivas", url: "https://datos.madrid.es/egob/catalogo/212504-0-agenda-actividades-deportes.json" },
{ nombre: "Agenda de actividades y eventos", url: "https://datos.madrid.es/egob/catalogo/300107-0-agenda-actividades-eventos.json" },
{ nombre: "Bibliotecas y bibliobuses", url: "https://datos.madrid.es/egob/catalogo/201747-0-bibliobuses-bibliotecas.json" },
{ nombre: "Cemetnerios", url: "https://datos.madrid.es/egob/catalogo/205026-0-cementerios.json" }]


for (const json of jsones) {

    var urlEntrada = "https://cors-anywhere.herokuapp.com/"
    urlEntrada += json.url;
    //ERROR DE CORS

    hacerRequest(urlEntrada)
}

function hacerRequest(url) {
    var miJson = new XMLHttpRequest()
    //abir url para poder hacer la peticion
    miJson.open("GET", url, true)
    // miJson.withCredentials = true;
    // miJson.setRequestHeader('Ping-Other', 'pingpong');
    // miJson.setRequestHeader('Content-Type', 'application/xml');
    //envio
    miJson.send();
    miJson.addEventListener("readystatechange", cargarDatos);
}
function cargarDatos(event) {
    var paquete = event.target;
    if (paquete.readyState == 4 && paquete.status == 200) {
        // console.log(verifyJson(paquete))
        var listaPost = new Array();
        if (!verifyJson(paquete.response)) {
            listaPost = JSON.parse(paquete.response);
            datos = listaPost["@graph"];
            dibujarLista(datos)
        }
    }
}
function verifyJson(input) {
    try {
        JSON.parse(input);
    } catch (ex) {
        console.log(ex.message)
        return ex.message; // Invalido y que te peines
    }
    return false; // Es valido 
}