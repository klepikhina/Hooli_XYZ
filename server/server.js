//NODE MODULES
const express               = require("express")
const expressValidator      = require("express-validator")
const mysql                 = require("mysql")
const bodyParser            = require("body-parser")
const fs                    = require("fs")
const path                  = require("path")
const ejs                   = require("ejs")
//FILES
const config                = require("./config")
//APP
let app = express()
let router = express.Router()
//SET
app.set('views', path.join(__dirname, '/../client/views'))
app.set('view engine', 'html')
//USE
app.use(router)
//ROUTER
router.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '/../client/views/index.html'))
})
//START
app.listen(config.server.port, function(){
  console.log("started on", config.server.port)
})
