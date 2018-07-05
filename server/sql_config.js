// DATABASE QUERIES
const crypto = require('crypto')
const mysql = require('mysql')
const config = require('./config.js')

module.exports = {
	//ADD USER
	createUser: async function(user){
		console.log('sql_config.js: Creating User', user)
		let addUser = ("INSERT INTO User (userName, userPass, email) VALUES (\'"+user.userName.toString()+'\', \''+user.password.toString()+'\', \''+user.userEmail.toString()+"\');")
		console.log(addUser)
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
			console.log("Query Added")
			con.end()
		})
		return (true)
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
			console.log(rows, rows.length)
			if (rows.length = 1) yesNo = true
			else yesNo = false
			con.end()
			console.log(yesNo)
			return yesNo
		})
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
			con.end()
		})

	},

	//ADD FILE
	addFile: async function(user){
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
			con.end()
		});

	}
}
