const con = mysql.createConnection({
  host: 'localhost',
  user: 'user', /*add your username*/
  password: 'password', /*add your mysql connection password*/
  database: 'HooliXYZ' /*the database*/
});

module.exports = {
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
