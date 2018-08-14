const express = require('express');
const bodyParser = require('body-parser');
const hbrs = require('express-handlebars');
const mysql = require('mysql');

const PORT = process.env.PORT || 8080;

app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", hbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "moviePlanner_db"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

//render index page
app.get('/', (req,res) =>{
    connection.query("SELECT * FROM movies", (err, data) => {
        if(err) {
            return res.status(500).end();
        }
        //console.log(data);
        res.render("index", {movies: data});
    })
})

//adding a movie
app.post("/movies", (req,res) =>{
    console.log(req.body);
    connection.query("INSERT INTO movies (movie) VALUE (?)", [req.body.movie], (err, data) =>{
        if (err) {
            console.log(err)
        }
        else {
            console.log(`movie successfully added to db`);
            res.json({ id: data.insertId })
        }
    })
    
})

app.get("/movies", function(req, res) {
    connection.query("SELECT * FROM movies;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.json(data);
    });
  });

//start server
app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})
