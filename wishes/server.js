const express = require('express');
const exphbs = require("express-handlebars");
const bodyParser = require('body-parser');
const mysql = require('mysql');

app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "wishes_db"
})

const userWish = [
    {
        id: 1,
        wish: "fly"
    },
    {
        id: 2,
        wish: "money"
    }
]

connection.connect((err,res) =>{
    if(err) throw err;
    console.log(res);
})

app.get("/", (req,res) => {
    res.render("index", {
        userWish: userWish
    })
})

//start server
app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
});