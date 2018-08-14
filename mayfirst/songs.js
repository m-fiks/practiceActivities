const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'top_songs_db'
})

connection.connect((err,data)=> {
    if(err) throw err;
    //console.log('CONNECTED');
    begin();

function begin (){
    inquirer.prompt([
        {
        message: 'What would you like to do?',
        type: 'list',
        choices: ["Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song"],
        name: 'userAction'
        }
    ]).then((answers)=>{
        switch(answers.userAction){
            case "Find songs by artist":
            artistSearch();
            break;
            case "Find all artists who appear more than once":
            //code block
            break;
            case "Find data within a specific range":
            //code block
            break;
            case "Search for a specific song":
            //code block
            break;
            default: console.log('Sorry, something broke?');
        }
    })
}
// A query which returns all data for songs sung by a specific artist
function artistSearch (){
    inquirer.prompt([
        {
            message: 'Which artist would you like to search for?',
            type: 'input',
            name: 'artist'
        }
    ]).then((answers) => {
        console.log(answers.artist)
        let sql = "SELECT * FROM top5000 WHERE ?";
        connection.query(sql, {artist: answers.artist}, (err, result) => {
            if (err) throw err;
            for(key in result){
                console.log(result[key].title);
            }
        })
    })
}

// A query which returns all artists who appear within the top 5000 more than once
function doubles (){
    let sql = "SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*) > 1"
    connection.query(sql, (err, result) => {
        if (err) throw err;
        for(key in result){
            console.log(result[key].artist);
        }
    })
}

// A query which returns all data contained within a specific range
function specRange (){
    let sql = "SELECT id,title,artist,release_year FROM top5000 WHERE id BETWEEN ? AND ?";
    connection.query(sql, [1, 10], (err, res) => {
        if(err) throw err;
        for(key in res){
            console.log(`${res[key].title}, ${res[key].artist}, ${res[key].release_year}`)
        }
        
    });
}

// A query which searches for a specific song in the top 5000 and returns the data for it
function findSong (){
    let sql = "SELECT title,artist,release_year FROM top5000 WHERE title = 'My heart will go on'";
    connection.query(sql, (err, res) => {
        if(err) throw err;
        for(key in res){
           console.log(`${res[key].title},${res[key].artist},${res[key].release_year}`)
        }
        if(res.length === 0){
            console.log('No songs found by that title :(')
        }
        
    });
}

//end connection query thingy
});
