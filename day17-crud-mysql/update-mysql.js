const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysql'
});

const updata_r = 'UPDATE customers SET age = ? where name = ?';

connect.connect();

connect.query(updata_r,[21, 'mustafa'], (err, res) => {
    if(err)
    {
        throw err;
    }
    else
    {
        console.log(res);
    }
});

connect.end();
