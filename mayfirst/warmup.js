// # Node + MySQL PopQuiz

// ## Using the `terminal` or your favorite MySQL GUI
// 1. Connect to MySQL server 
// 2. Create a new Database
// 3. Create a new table with a primary key that 
//auto-increments, and a text field
// 4. Insert 3 Rows into your new table

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'warm_up_db'
})

connection.connect((err,data)=> {
    if(err) throw err;
    console.log('CONNECTED');
    const sql = "SELECT * FROM sodas"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        for (let i=0; i<3; i++){
            console.log(result[i].name);
        }
      
    })
    connection.end();
})

// ## Using Node / IDE of your choice
// 1. Create a package.json
// 2. Require `mysql`
// 3. Connect to MySQL
// 4. Print the 3 rows of data to the `console`