function conectarUsuario(id) {

    cargarUsuarioRequest(id)

}


function pagina(n) {
    hacerRequest("https://reqres.in/api/users?page=" + n)
}