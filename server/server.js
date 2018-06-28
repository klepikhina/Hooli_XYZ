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


let app = express()
let router = express.Router()

router.get('/', function(req, res){
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, '/../client/views/login.html'))
  res.send("Good Response")
=======
  res.sendFile(path.join(__dirname, '/../client/views/loginpage.html'))
>>>>>>> 3d84dfb4766e270bc72aa5aa1f7b713771774ba9
})

app.set('views', path.join(__dirname, '/../client/views'))
app.use(express.static(path.join(__dirname, '/../client/public')))
app.use("/css", express.static(path.join(__dirname, '/../client/public/css')))
app.use(router)

app.listen(config.server.port, function(err){
  if(err){console.log(err)}
  console.log("started on", config.server.port)
})
