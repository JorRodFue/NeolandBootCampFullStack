let mongoose = require("mongoose")
let Schema = mongoose.Schema;

let personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    edad: Number,
    email: String,
    // ESTO PARA RELACIONALES, PITOSTE ARRAY DE OBJETOS
    arrayProductos: [
        { type: Schema.Types.ObjectId, ref: 'producto' }
    ]

}, { versionKey: false }
)

personaSchema.virtual('nombre_completo').get(function () { return this.nombre + " " + this.apellidos })
personaSchema.virtual('nombre_completo').set(function (newValue) {
    let divisiones = newValue.split(" ")
    this.nombre = divisiones[0];
    this.apellidos = divisiones[1]
})


module.exports = mongoose.model('persona', personaSchema)