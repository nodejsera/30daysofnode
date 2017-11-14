var mysql = require('mysql');

var connect =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});


var insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
//establishing connection
connect.getConnection(function(err, connection){
    
  //Inserting a record into details
   connection.query(insert_R,['rejii',24], function(err,res){
    if(err) throw err;
    else {
        console.log('Details added successfully');
    }
  });

//releasing connection
 connection.release();

});