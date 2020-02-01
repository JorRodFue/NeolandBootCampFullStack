let express = require('express')
let router = express.Router()
let Producto = require('../../models/producto')


router.get("/", (req, res) => {
    console.log("estamos en /api productos get")
    Producto.find((err, resultado) => {
        if (err) res.json({ error: err })
        res.json(resultado)
    })
})

router.post("/", (req, res) => {
    console.log("estamos en /api productos get")
    Producto.create(req.body)
        .then((resultado) => { res.json(resultado) })

})

router.get("/filtrar_precio", (req, res) => {
    let filtro = {
        precio: { $gt: 100, $lt: 1000 },
        activo: true
    }
    Producto.find(filtro

        , (err, resultado) => {
            if (err) res.json(err)
            res.json(resultado)
        })

})

router.get("/activos", (req, res) => {
    Producto.activos((err, resultado) => { res.json(resultado) })
    // le pasas una funcion callback por parametro para rescatar el resultado
})

router.get("/mismo", (req, res) => {
    let obj = new Producto();
    obj.departamento = "departamentoPost"
    obj.mismoDepartamento((err, resultado) => { res.json(resultado) })
})


// PIFOSTIO RELACIONAL
router.get('/relacion', (req, res) => {
    Producto.activos((err, resultado) => {

        let Persona = require("../../models/persona")
        let pers = new Persona();
        pers.nombre = "Jose María";
        pers.apellidos = "García"
        pers.edad = 75
        pers.email = "chemita@gmail.com"
        pers.arrayProductos = resultado;
        pers.save((err) => {
            console.log(error)
        })


    })


})

module.exports = router