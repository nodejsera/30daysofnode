const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql'
});

const read_r = 'select * from customers';

connect.connect();

connect.query(read_r, (err, data) => {
    if (err)
    {
        throw err;
    }
    else
    {
        console.log(data);
    }
});

connect.end();
