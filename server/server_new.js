//NODE MODULES
const express               = require("express")
const expressValidator      = require("express-validator")
const mysql                 = require("mysql")
const bodyParser            = require("body-parser")
const fs                    = require("fs")
const path                  = require("path")
const ejs                   = require("ejs")
const mocha                 = require("mocha")
const chai                  = require("chai")
//CONFIG
const config                = require("./config")
<<<<<<< HEAD
//APP
var app = express()
var router = express.Router()
//MYSQL API

//SET
app.set('port', (process.env.PORT || 8001))
//app.set('views', path.join(__dirname, '/../client/views'))
//USE
app.use("/views",express.static(path.join(__dirname, '/../client/views')))
app.use("/css", express.static(path.join(__dirname, '/../client/public/css')))
app.use("/img", express.static(path.join(__dirname, '/../client/public/img')))
app.use(router)
//ROUTER
=======


let app = express()
let router = express.Router()

>>>>>>> 2b2ad5274a6df0b0982bd17e23a7593c83824968
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/../client/views/loginpage.html'))
  res.send("Good Response")
})

app.set('views', path.join(__dirname, '/../client/views'))
app.use(express.static(path.join(__dirname, '/../client/public')))
app.use("/css", express.static(path.join(__dirname, '/../client/public/css')))
app.use(router)

app.listen(config.server.port, function(err){
  if(err){console.log(err)}
  console.log("started on", config.server.port)
})
