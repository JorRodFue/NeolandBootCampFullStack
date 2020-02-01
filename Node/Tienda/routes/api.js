let express = require('express')
let router = express.Router()


router.get("/", (req, res) => {
    console.log("estamos en /api")
})
let productosRouter = require("./api/productos")
router.use("/productos", productosRouter)


module.exports = router