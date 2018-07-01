//HOOLI XYZ Main Server

//NODE MODULES
const bodyParser            = require('body-parser')
const express               = require('express')
const expressValidator      = require('express-validator')
const myConnection          = require('express-myconnection')
const fs                    = require('fs')
const path                  = require('path')
const mysql                 = require('mysql')
const multer                = require('multer') // file storing middleware
const require_sql           = require('require-sql')
//CONFIG FILES
const config                = require('./config.js')
const sql_config            = require('./sql_config.js')
const HooliXYZ_Create       = require('../db/HooliXYZ_Create.sql')

//APP
var app = express()
//EXPRESS MODULES
app.use(expressValidator())
app.use(bodyParser.urlencoded({ extended:true }))// for parsing application/x-www-form-urlencoded
app.use(bodyParser.json())// for parsing application/json

//STATIC FOLDERS
app.use("/views",express.static(path.join(__dirname, '/../client/views')))
app.use("/css", express.static(path.join(__dirname, '/../client/public/css')))
app.use("/img", express.static(path.join(__dirname, '/../client/public/img')))
app.use("/scripts", express.static(path.join(__dirname, '/../client/scripts')))
app.use("/file-storage", express.static(path.join(__dirname, '/../client/public/file-storage')))

//PAGE ROUTER
app.get('/', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port+'/')
  res.sendFile(path.join(__dirname, '/../client/views/index.html'))
})
app.get('/login', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port+'/login')
  res.sendFile(path.join(__dirname, '/../client/views/login.html'))
})
app.get('/signUp', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port+'/signUp')
  res.sendFile(path.join(__dirname, '/../client/views/add_user.html'))
})
app.get('/upload', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port+'/upload')
  res.sendFile(path.join(__dirname, '/../client/views/add_files.html'))
})
app.get('/loginpage', function(req, res){
  console.log('GET', config.server.host+':'+config.server.port+'/loginpage')
  res.sendFile(path.join(__dirname, '/../client/views/loginpage.html'))
})


//DATABASE API
app.post('/api/createUser', function(req, res){
  sql_config.createUser({
    userFirstName: req.body.userFirstName,
    userLastName: req.body.userLastName,
    userEmail: req.body.userEmail,
    password: req.body.password,
  })
})
app.post('/api/checkUser', function(req, res){
  console.log("checking User")
  sql_config.checkUser({
    userEmail: req.body.userEmail,
    password: req.body.password
  })
})
app.post('/api/uploadFile', function(req, res){

})

/*
//Show folders
app.get('/show_folders', showfolders.list);

//Serve add file page
app.get('/', function(req, res){
    res.render('add_files.html');
});
// file handling solution
app.post('/upload',multer(multerConfig).single('photo'),function(req,res){
   res.send('Complete!');
});
*/


//Get files to temp server storage (src: https://medium.com/@Moonstrasse/how-to-make-a-basic-html-form-file-upload-using-multer-in-an-express-node-js-app-16dac2476610)
const multerConfig = {
  storage: multer.diskStorage({
    //Setup where the user's file will go
    destination: function(req, file, next){
      next(null, './public/file-storage');
    },
    //Then give the file a unique name
    filename: function(req, file, next){
        console.log(file);
        const ext = file.mimetype.split('/')[1];
        next(null, file.fieldname + '-' + Date.now() + '.'+ext);
      }
    }),
    //A means of ensuring only images are uploaded.
    fileFilter: function(req, file, next){
      if(!file) next()
      if(file){
        console.log('file uploaded');
        next(null, true);
      }else{
        console.log("unable to upload file");
        //TODO:  A better message response to user on failure.
        return next();
      }
    }
};

//MYSQL CONNECTION & CREATION
const con = mysql.createConnection(config.database)
con.connect(function(err){
  if(err) throw err
  else console.log("Database", config.database.database, "Connected")
})
con.query(HooliXYZ_Create.toString(), function(err){
  if(err) throw err
  else console.log("Tables Created")
})

//START
app.listen(config.server.port, function(){
  console.log("Hooli XYZ server running on",
  "http://"+config.server.host+":"+config.server.port)
})
