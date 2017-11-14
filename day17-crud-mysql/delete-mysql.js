var mysql = require('mysql');

var connect =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});


var delete_R = 'DELETE FROM details WHERE name=?';
//establishing connection
connect.getConnection(function(err, connection){
    
  //Deleting a record from details
  connection.query(delete_R,['regii'], function(err, res){
    if(err) throw err;
    else {
        console.log('A record is removed !');
    }
  });

//releasing connection
 connection.release();

});