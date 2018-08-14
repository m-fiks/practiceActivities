const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    password: '',
    database: 'iceCreamDB'
});

connection.connect((err,data) => {
    if(err) throw err;
    console.log(data);
    connection.end();
})