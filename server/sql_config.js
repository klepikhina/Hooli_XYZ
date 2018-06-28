const con = mysql.createConnection({
  host: 'localhost',
  user: 'user', /*add your username*/
  password: 'password', /*add your mysql connection password*/
  database: 'HooliXYZ' /*the database*/
});
   /*test*/
module.exports = {
  /*If user exists, returns 1. If user does not exist, returns 0.*/
  /*Show message that the data was received*/
	checkUser: function(username, password){
	   con.query('SELECT count(1) from User WHERE username=? and userPass=?;'
  }),
	selectFolders: function (userId) {
		/*Select folders where userid=?*/
		con.query('SELECT f.folderId, f.folderName FROM Folder f
      JOIN  UserFolder uf ON f.folderId=uf.folderId
			WHERE  uf.userId=?;', userId, function(err,rows){
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
	},
	insertUser: function(username, password, email) {
        con.query('
		INSERT INTO User (username, userPass, email) VALUES(?,?,?);
                '
/*Add a user.*/
/*Show message that the data was received*/
        });
	},
	insertFolder: function(folderName) {
        con.query('
                INSERT INTO Folder (?) VALUES(?,?,?);
                '
/*Add a folder.*/
/*Show message that the data was received*/
        });
	},
	insertFile: function(fileName, fileSize, folderId) {
        con.query('
                INSERT INTO File (fileName, fileSize, folderId) VALUES(?,?,?);
                '
/*Add a user.*/
/*Show message that the data was received*/
        });
};
