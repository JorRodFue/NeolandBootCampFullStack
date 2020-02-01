var express = require('express');
var router = express.Router();

const Persona = require("../models/persona.js")

// /* GET home page. */ personas
router.get('/', function (req, res, next) {
    console.log("se hizo get /personas")
    Persona.find((err, personas) => {
        if (err) return console.log(err)
        else {
            res.render("personas.pug", { arrayPersonas: personas })
            return console.log(personas)
        }
    })
});

router.get('/new', function (req, res) {
    res.render("personas-form.pug")
})

router.post('/create', (req, res) => {
    console.log("entramos en /personas/create")
    Persona.create(req.body).then(() => {
        res.redirect("/personas")
    })
})




router.get('/edit/:id', (req, res) => {
    console.log("entando en /personas/edit", req.params)
    Persona.findById(req.params.id, (err, result) => {
        if (!err) res.render("personas-edit.pug", { persona: result })
    })

})

router.post('/update', (req, res) => {
    console.log("entramos en /personas/update")
    Persona.findByIdAndUpdate(req.body.id, req.body, (err, result) => {
        if (!err) res.redirect("/personas")
        else console.log(err)
    })
})

router.get('/delete/:id', (req, res) => {
    console.log("entramos en /personas/delete")
    Persona.findByIdAndDelete(req.params.id, (err, result) => {
        console.log(result)
        if (!err) res.redirect("/personas")
    })

})



router.get('/insert_v1', (req, res) => {
    let pers = new Persona();
    pers.nombre = "Amalia"
    pers.apellidos = "Rodríguez"
    pers.edad = 87
    pers.email = "nadie@nadie.com"
    console.log(pers)
    pers.save()
    res.send("Insertando V1")
})

router.get('/insert_v2', (req, res) => {
    Persona.create({
        nombre: "Rosarito",
        apellidos: "Apellidando",
        edad: 44,
        email: "roasario@mail.com"
    })
        .then((persona) => { console.log(persona) })
        .catch((error) => { console.log(error) })

    res.send("Insertando V2")


})

router.get('/insert_v3', async (req, res) => {
    let pers = await Persona.create(
        { nombre: "Nombre3", apellidos: "Apellidos3", edad: 33, email: "email3@33.papaes" }
    )
    res.json(pers)
})

module.exports = router;
