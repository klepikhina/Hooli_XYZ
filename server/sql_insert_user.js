var express = require('express');
var app = express();
var ejs = require('ejs');
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
var HOST = 'localhost';
var PORT = 8001
var MYSQL_USER = 'root';
var MYSQL_PASS = '';
var DATABASE = 'HooliXYZ';

var mysql = mysql.createConnection({
host: HOST,
port: PORT,
user: MYSQL_USER,
password: MYSQL_PASS,
database: DATABASE
});


app.get('/',function(req,res,next){
	res.sendfile('views/add_user.html');
});

app.post('/insert', function(req, res) {

console.log('req.body');
console.log(req.body);
res.write('You sent the name "' + req.body.username+'".\n');
res.write('You sent the Password "' + req.body.userPass+'".\n');
res.write('You sent the email "' + req.body.email+'".\n');
res.end()

client.query(" INSERT INTO User (username, userPass, email) VALUES('"+req.body.username+"','"+req.body.userPass+"','"+req.body.email+"')",function(err, result)      
{                                                      
  if (err)
     throw err;
});
});
app.listen(8001);
console.log('App listening at port:8001');
