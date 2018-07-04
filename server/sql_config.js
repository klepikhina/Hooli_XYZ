// DATABASE QUERIES
const crypto = require('crypto')
const mysql = require('mysql')
const config = require('./config.js')
// var hash = crypto.createHash('sha256').update(password).digest('base64');

module.exports = {
	//ADD USER
	createUser: async function(user){
		console.log('sql_config.js: Creating User', user)
		let addUser = ('INSERT INTO User (userName, userPass, email) VALUES (\''+user.userName.toString()+'\', \''+user.password.toString()+'\', \''+user.userEmail.toString()+"\');")
		let con = mysql.createConnection(config.database)
		con.connect(function(err){if(err) throw err})
		con.query(addUser, function(err, rows, fields){
			if (err) throw err
			for (var i in rows){
				console.log('Added: ', rows[i].userName)
				userName = rows[i].userName
				password = rows[i].password
				email = rows[i].email
			}
		})
		con.end()
		return true
	},

	//VERIFY USER
	checkUser: async function(user){
		console.log("sql_config.js: Checking User", user)
		let verifyCreds = "SELECT * from User WHERE email=\'"+user.userEmail.toString()+"\' and userPass=\'"+user.password.toString()+"\';"
		let yesNo = false
		let con = mysql.createConnection(config.database)
		con.connect(function(err){if(err) throw err})
		con.query(verifyCreds, function(err, rows){
			if (err) throw err;
			if (rows.length >= 0) yesNo = true
			else yesNo = false
		})
		con.end()
		return yesNo
	},

	//SHOW FILES
	showFiles: async function(user){
		console.log("sql_config.js: Showing Files", user)
		let showFiles = 'select fileName, fileSize from File where username='+user+ ';';
		let con = mysql.createConnection(config.database)
		con.connect(function(err){if(err) throw err})
		con.query(showFiles, function(err, rows, fields){
			if (err) throw err
			for (var i in rows){
				console.log('File: ', rows[i].fileName, ',', rows[i].fileSize);
				fileName = rows[i].fileName;
				fileSize = rows[i].fileSize;
			}
		})
		con.end();
	},

	//ADD FILE
	addFile: function(user){
		console.log("sql_config.js: Showing Files", user)
		let addFile = 'INSERT INTO File ('+fileName+','+fileSize+');';
		let con = mysql.createConnection(config.database)
		con.connect(function(err){if(err) throw err})
		con.query(addFile, function(err, rows, fields) {
			if (err) throw err;
		  for (var i in rows) {
		  	console.log('Added: ', rows[i].fileName);
		    fileName = rows[i].fileName;
		    fileSize = rows[i].fileSize
		  }
		});
		con.end();
	}
}
