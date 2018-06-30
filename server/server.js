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
const sql_config            = require("./sql-config")
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
//ROUTER
app.get('/', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port, '/')
  res.sendFile(path.join(__dirname, '/../client/views/index.html'))
})
app.post('/', function(req, res){
  console.log('POST', config.server.host+':'+config.server.port, '/')
})
app.put('/', function(req, res){
  console.log('PUT', config.server.host+':'+config.server.port, '/')
})
app.get('/login', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port, '/login')
  res.sendFile(path.join(__dirname, '/../client/views/login.html'))
})
app.post('/login', function(req, res){
  console.log('POST', config.server.host+':'+config.server.port, '/login')
})
app.put('/login', function(req, res){
  console.log('PUT', config.server.host+':'+config.server.port, '/login')
})
//DATABASE API
app.post('/createUser', function(req, res){
  sql_config.createUser({
    username: req.body.userEmail,
    password: req.body.password
  }).then(function(){
    res.sendStatus(200)
  })
})
//START
app.listen(config.server.port, function(){
  console.log("Hooli XYZ server running on",
  "http://"+config.server.host+":"+config.server.port)
})
