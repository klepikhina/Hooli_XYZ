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
			SELECT u.userId, uf.folderId FROM User u
				JOIN UserFolder uf ON u.userId=uf.userId
				WHERE u.userId=?;', userId, (err,rows) => {
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
