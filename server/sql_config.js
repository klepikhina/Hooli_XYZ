// Queries

var mysql = require('mysql');
var crypto = require('crypto');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "HooliXYZ"
});

// Connect to DB
con.connect(function(err) {
	if(err) throw err;
	console.log("Connected to HooliXYZ");
});


// Vars
userName = username;
password = userPass;
email = email;
fileName = fileName;
fileSize = fileSize;
var hash = crypto.createHash('sha256').update(password).digest('base64');

// Verify that a user has an account
var verifyCreds = 'SELECT count(1) from User WHERE username=' + userName + ' and userPass=' + password + ';';

con.query(verifyCreds, function(err, rows, fields) {
        if (err) throw err;

        for (var i in rows) {
                console.log('Veried (1=yes, 0=no): ', rows[i];
		yesNo = rows[i];
        }
        res.send('</br></br><h2>Verified (1=yes, 0=no): </h2><h1>'+ yesNo+ ' </h1>' );
        con.end();
});     


// Show files associated with a user
var showFiles = 'select fileName, fileSize from File where username=' + userName + ';';
	
con.query(showFiles, function(err, rows, fields) {
	if (err) throw err;

	for (var i in rows) {
		console.log('File: ', rows[i].fileName, ',', rows[i].fileSize);
		fileName = rows[i].fileName;
		fileSize = rows[i].fileSize;
	}
	res.send('</br></br><h2>File: </h2><h1>' + userName + '- ' + fileName + ', ' + fileSize + '</h1>' );
	con.end();
});


//Add a new user
var addUser = 'INSERT INTO User (username, userPass, email) VALUES('+userName+','+password+','+email+');';

con.query(addUser, function(err, rows, fields) {
        if (err) throw err;

        for (var i in rows) {
                console.log('Added: ', rows[i].userName);
                userName = rows[i].userName;
                password = rows[i].password;
		email = rows[i].email
        }
        res.send('</br></br><h2>User Added: </h2><h1>' + userName + '- ' + hash + ', ' + email + '</h1>' );
        con.end();
});


//Add a new file
var addFile = 'INSERT INTO File ('+fileName+','+fileSize+');';

con.query(addFile, function(err, rows, fields) {
        if (err) throw err;

        for (var i in rows) {
                console.log('Added: ', rows[i].fileName);
                fileName = rows[i].fileName;`
                fileSize = rows[i].fileSize
        }
        res.send('</br></br><h2>File Added: </h2><h1>' + fileName + '- ' + fileSize + '</h1>' );
        con.end();
});



