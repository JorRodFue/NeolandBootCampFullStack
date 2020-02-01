let mongoose = require("mongoose")
// let databaseUrl = "mongodb://127.0.0.1:27017/neoland"

const databaseUrl = "mongodb://heroku_5m5fg4t8:d39slnnu6bsm99r7qp7rl0vg1h@ds033079.mlab.com:33079/heroku_5m5fg4t8"

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })

exports.modules = { db: mongoose }