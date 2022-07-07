const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql'
});

const delete_r = 'DELETE FROM customers WHERE name = ?';

connect.connect();

connect.query(delete_r, ['mustafa'], (err, res) => {
    if(err)
{
    throw err;
}
else
{
    console.log('A record is Deleted!');
}
});

connect.end();
