//NODE MODULES
const bodyParser            = require("body-parser")
const express               = require("express")
const expressValidator      = require("express-validator")
const myConnection          = require("express-myconnection")
const fs                    = require("fs")
const path                  = require("path")
const mysql                 = require("mysql")
//CONFIG
const config                = require("./config")
//APP
var app = express()
//EXPRESS MODULES
app.use(expressValidator())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
//STATIC FOLDERS
app.use("/views",express.static(path.join(__dirname, '/../client/views')))
app.use("/css", express.static(path.join(__dirname, '/../client/public/css')))
app.use("/img", express.static(path.join(__dirname, '/../client/public/img')))
app.use("/scripts", express.static(path.join(__dirname, '/../client/scripts')))
//DATABASE

//ROUTER
app.get('/', function(req, res){
  console.log('GET', config.server.host, ':', config.server.port, '/')
  res.sendFile(path.join(__dirname, '/../client/views/index.html'))
})
app.post('/', function(req, res){
  console.log(req)
  res.send("POST Request Sent")
})
//START
app.listen(config.server.port, function(){
  console.log("Hooli XYZ server running on port", config.server.port,
    ": http://"+config.server.host)
})
