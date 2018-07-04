// DATABASE QUERIES
const crypto = require('crypto')
const mysql = require('mysql')
const config = require('./config.js')
// var hash = crypto.createHash('sha256').update(password).digest('base64');

module.exports = {
	//ADD USER
	createUser: function(user){
		let addUser = ('INSERT INTO User (username, userpass, email) VALUES',
		user.userName.toString()+' '+user.password.toString()+' '+user.userEmail.toString()+";")
		console.log(addUser)
	},

	// var addUser = 'INSERT INTO User (username, userPass, email) VALUES('+userName+','+password+','+email+');';
  //
	// con.query(addUser, function(err, rows, fields) {
	//         if (err) throw err;
  //
	//         for (var i in rows) {
	//                 console.log('Added: ', rows[i].userName);
	//                 userName = rows[i].userName;
	//                 password = rows[i].password;
	// 		email = rows[i].email
	//         }
	//         res.send('</br></br><h2>User Added: </h2><h1>' + userName + '- ' + hash + ', ' + email + '</h1>' );
	//         con.end();
	// });

	//VERIFY USER
	checkUser: async function(user){
		console.log("sql_config.js: Checking User", user)
		let verifyCreds = "SELECT * from User WHERE email=\'"+user.userEmail.toString()+"\' and userPass=\'"+user.password.toString()+"\';"
		let yesNo = false
		const con = mysql.createConnection(config.database)
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
	showFiles: function(user){
		// var showFiles = 'select fileName, fileSize from File where username=' + userName + ';';
	  //
		// con.query(showFiles, function(err, rows, fields) {
		// 	if (err) throw err;
	  //
		// 	for (var i in rows) {
		// 		console.log('File: ', rows[i].fileName, ',', rows[i].fileSize);
		// 		fileName = rows[i].fileName;
		// 		fileSize = rows[i].fileSize;
		// 	}
		// 	res.send('</br></br><h2>File: </h2><h1>' + userName + '- ' + fileName + ', ' + fileSize + '</h1>' );
		// 	con.end();
		// });
	},

	//ADD FILE
	addFile: function(user){
		// var addFile = 'INSERT INTO File ('+fileName+','+fileSize+');';
	  //
		// con.query(addFile, function(err, rows, fields) {
		//         if (err) throw err;
	  //
		//         for (var i in rows) {
		//                 console.log('Added: ', rows[i].fileName);
		//                 fileName = rows[i].fileName;
		//                 fileSize = rows[i].fileSize
		//         }
		//         res.send('</br></br><h2>File Added: </h2><h1>' + fileName + '- ' + fileSize + '</h1>' );
		//         con.end();
		// });
	}
}
