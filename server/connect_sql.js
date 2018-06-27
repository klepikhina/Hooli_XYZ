const con = mysql.createConnection({
  host: 'localhost',
  user: 'user', /*add your username*/
  password: 'password', /*add your mysql connection password*/
  database: 'HooliXYZ' /*the database*/
});

module.exports = {
	checkUser: function(username, password) {
	con.query('
		SELECT count(1) from User WHERE username=? and userPass=?;
		'
/*If user exists, returns 1. If user does not exist, returns 0.*/
/*Show message that the data was received*/
	});
	selectFolders: function (userId) {
		/*Select folders where userid=?*/
		con.query('
			SELECT f.folderId, f.folderName FROM Folder f
				JOIN  UserFolder uf ON f.folderId=uf.folderId
				WHERE  uf.userId=?;', userId, (err,rows) => {
			if(err) throw err;
			console.log('Data received from Db:\n');
			console.log(rows);
		});
  	},
	selectFiles: function (folderId) {
		con.query('
                        SELECT fileName, fileSize FROM File
				WHERE folderId = ?;', folderId, (err,rows) => {
                        if(err) throw err;
                        console.log('Data received from Db:\n');
                        console.log(rows);
                });
	}
};
