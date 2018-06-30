//NODE MODULES
const bodyParser            = require("body-parser")
const express               = require("express")
const expressValidator      = require("express-validator")
const myConnection          = require("express-myconnection")
const fs                    = require("fs")
const path                  = require("path")
const mysql                 = require("mysql")
const multer                = require("multer") // file storing middleware
//CONFIG FILES
const config                = require("./config.js")
const sql_config            = require("./sql_config.js")
const sql_insert_user       = require("./sql_insert_user.js")
const show_files            = require("./routes/show_files.js")
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
app.use("/file-storage", express.static(path.join(__dirname, '/../client/public/file-storage')))

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

//DATABASE API
// app.post('/createUser', function(req, res){
//   sql_config.createUser({
//     username: req.body.userEmail,
//     password: req.body.password
//   }).then(function(){
//     res.sendStatus(200)
//   })
// })


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
          if(!file){
            next();
          }
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


//START
app.listen(config.server.port, function(){
  console.log("Hooli XYZ server running on",
  "http://"+config.server.host+":"+config.server.port)
})
