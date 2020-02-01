let mongoose = require('mongoose')
let Schema = mongoose.Schema;

let productoSchema = new Schema(
    {
        nombre: String,
        precio: Number,
        departamento: String,
        descripcion: String,
        activo: Boolean
    }
)

productoSchema.statics.activos = function (funcioncallback) {
    this.model('producto').find({ activo: true }, funcioncallback)
}
// se usa el callback para rescatar


productoSchema.methods.mismoDepartamento = function (funcioncallback) {
    this.model('producto').find({ departamento: this.departamento }, funcioncallback)
}

module.exports = mongoose.model('producto', productoSchema)
//  SE VA A CREAR TABLE "productos" usando el productoSchema