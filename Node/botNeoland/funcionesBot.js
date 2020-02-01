let funsiones = require('./funsiones.js')  // ARRAY CON LOS COMANDOS DISPONIBLES 
let usuarioDAO = require('./usuarioDAO').usuarioDAO
let funcionesBot = {

    spamear(arrayMensajes, usuario = null, todos = false) {

        console.log(` spameo  ${arrayMensajes} a ${usuario}  y todos es ${todos}`)
        let mensaje = arrayMensajes[Math.floor(Math.random() * (arrayMensajes.length))]
        //si viene un usuario, se le manda un mensaje del array (si el array es de 1 (lenght 1), siempre ese mensaje el [0])
        if (usuario) { bot.telegram.sendMessage(usuario, mensaje) }
        else {
            // si no venia usuario, se manda un mensaje aleatorio a todos los usuarios    
            usuarioDAO.getAll().then((users) => {
                if (todos) {//si viene a todos, se manda a todos
                    for (const user of users) {
                        mensaje = arrayMensajes[Math.floor(Math.random() * (arrayMensajes.length))] // si quiero mensajes aleatorios
                        bot.telegram.sendMessage(user.telegramID, mensaje)
                    }
                } //si no viene a todos, se aleatoriza el usuario
                if (!todos) {
                    let aleatorio = Math.floor(Math.random() * users.length)
                    bot.telegram.sendMessage(users[aleatorio].telegramID, mensaje)
                }
            })

        }
    },
    // mensajearUsuario(mensaje = "no me ha llegado nada", destinatario = null) {

    //     if (destinatario === null) { //si viene nulo se lo mando a uno aleatorio de la base de datos
    //         usuarioDAO.getAll().then((rows) => {
    //             let aleatorio = Math.floor(Math.random() * (rows.length))
    //             bot.telegram.sendMessage(rows[aleatorio].telegramID, mensaje)
    //         })
    //     }
    //     // si no, se lo mando a una id concreta que me han pasado por parametro
    //     else bot.telegram.sendMessage(destinatario, mensaje)
    // },

    dameInfo(ctx) {
        // se pega la info asi que timeouts chungos
        setTimeout(() => {
            ctx.reply("TENGO DISPONIBLES ESTAS FUNSIONES")
        }, 500)
        setTimeout(() => {
            for (const funsion of funsiones) {
                ctx.reply(funsion)
            }
        }, 800)

    }
}




module.exports = { funcionesBot: funcionesBot }