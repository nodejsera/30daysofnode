var mysql = require('mysql');

var connect =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});


var drop_T = 'DROP table details';
//establishing connection
connect.getConnection(function(err, connection){
    
  //Drop the details table
  connection.query(drop_T, function(err, res){
    if(err) throw err;
    else {
        console.log('The details table is removed successfully');
    }
  });

//releasing connection
 connection.release();

});