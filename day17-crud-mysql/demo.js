var mysql = require('mysql');

var pool =  mysql.createPool({
host : 'localhost',
user : 'root',
password: '',
database: 'test'
});
 
var createTable = "CREATE TABLE employee(id int(11) NOT NULL AUTO_INCREMENT,"+
    "name varchar(20) DEFAULT NULL,"+
    "salary float(11) DEFAULT NULL,"+
    "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";
 
var insertRecord = 'INSERT INTO employee(name,salary) VALUE(?,?)';
 
var readTable = 'SELECT * FROM employee';
 
var updateRecord = 'UPDATE employee SET salary = ? WHERE name=?';
 
var deleteRecord = 'DELETE FROM employee WHERE name=?';
 
var dropTable = 'DROP table employee';
 
pool.getConnection(function(err, connection){    
  //Create a table called employee
  connection.query(createTable,  function(err){
    if(err) throw err;
    else {
        console.log('Table created!');
    }
  });
 
  //Insert a record.
  connection.query(insertRecord,['Joe',50000], function(err,res){
    if(err) throw err;
    else {
        console.log('A new employee has been added.');
    }
  });
 
  //Read table.
  connection.query(readTable, function(err, rows){
    if(err) throw err;
    else {
        console.log(rows);
    }
  });
 
  //Update a record.
  connection.query(updateRecord,[60000,'Joe'], function(err, res){
    if(err) throw err;
    else {
        console.log('Increased the salary for Joe.');
    }
  });
 
  //Read table.
  connection.query(readTable, function(err, rows){
    if(err) throw err;
    else {
        console.log(rows);
    }
  });
 
  //Delete a record.
  connection.query(deleteRecord,['Joe'], function(err, res){
    if(err) throw err;
    else {
        console.log('An employee is removed.');
    }
  });
 
  //Drop a table.
  connection.query(dropTable, function(err, res){
    if(err) throw err;
    else {
        console.log('The employee table is removed.');
    }
  });
 
  connection.release();//release the connection
});