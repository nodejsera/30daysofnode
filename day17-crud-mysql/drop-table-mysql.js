const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql'
});

const drop_r = 'Drop table customers';

connect.connect();


connect.query(drop_r, (err, res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log('Table named Customers Dropped successfuly');
    }
});

connect.end();
