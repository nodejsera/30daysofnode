const mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql'
});

var table = 'CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), age INT)';

connect.connect();

connect.query(table, (err, result) => {
    if (err) {throw err;}
    console.log('Table created Successfully');
});

connect.end();
