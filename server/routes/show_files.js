//Right now just shows all files for all users. In a future version we will seperate who can see what files
exports.list = function(req, res){
  req.getConnection(function(err,connection){
      var query = connection.query('SELECT fileName, fileSize from File',function(err,rows){
        if(err) console.log("Error Selecting : %s ",err );
        res.render('Folders',{page_title:"Folders",data:rows});
      });
  });
};
