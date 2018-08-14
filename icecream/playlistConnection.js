const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',
    password: '',
    database: 'playlistseedsdb'
});

connection.connect((err,data) => {
    if(err) throw err;
    console.log('connected')
    const sql = "INSERT INTO actual_songs (name, artist, genre) VALUES ('Whats my age again?', 'Blink 182', 'Pop Punk')"
    connection.query(sql, (err, data) => {
        if(err) throw err;
        console.log('added to table');
    })
    connection.end();
})

