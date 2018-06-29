const express               = require("express")
const expressValidator      = require("express-validator")
const mysql                 = require("mysql")
const bodyParser            = require("body-parser")
const fs                    = require("fs")
const path                  = require("path")
const ejs                   = require("ejs")
//CONFIG
const config                = require("./config")
//APP
let app = express()
let router = express.Router()
//MYSQL API

//SET
app.set('views', path.join(__dirname, '/../client/views'))
//USE
app.use(express.static(path.join(__dirname, '../public')))
//app.use("/css", express.static(path.join(__dirname, '/../client/public/css')))
app.use(router)
//ROUTER
router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/../client/views/loginpage.html'))
})
//START
app.listen(config.server.port, function(){
  console.log("started on", config.server.port)
})
