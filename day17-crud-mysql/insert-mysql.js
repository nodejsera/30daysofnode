const mysql = require('mysql');

var connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql'
});

var insert_R = "INSERT INTO customers (name, address ,age) VALUES (?,?,?)";

connect.connect();
    connect.query(insert_R,['mustafa','peshawar', 20], (err, result) => {
        if (err) {
            throw err;
        }
        else 
        {
        console.log('Record Inserted Successfully');
    }
    });
connect.end();
