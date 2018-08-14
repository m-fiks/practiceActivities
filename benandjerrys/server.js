const express = require('express');
const hbrs = require('express-handlebars');

app = express();

const PORT = process.env.PORT || 3000;

app.engine("handlebars", hbrs ({defaultLayout: "main"}));
app.set("view engine", "handlebars");

const icecreams = [
    {name: 'vanilla', price: 10, awesomeness: 3},
    {name: 'chocolate', price: 4, awesomeness: 8},
    {name: 'banana', price: 1, awesomeness: 1},
    {name: 'greentea', price: 5, awesomeness: 7},
    {name: 'jawbreakers', price: 6, awesomeness: 2},
  ];

app.get("/icecreams", (req, res) => {
    res.render("all", {
        icecream: icecreams,
    });
})

app.get("/:name", (req,res) => {
    //res.send(icecreams)
    let flav = req.params.name
    switch(flav){
        case "vanilla":
        res.render("icecream", icecreams[0])
        break;
        case "chocolate":
        res.render("icecream", icecreams[1])
        break;
        case "banana":
        res.render("icecream", icecreams[2])
        break;
        case "greentea":
        res.render("icecream", icecreams[3])
        break;
        case "jawbreakers":
        res.render("icecream", icecreams[4])
        break;
        default: 
        res.send(`Sorry, we don't have that flavor - try again!`)
    }
})
  
app.listen(PORT, () => {
    console.log(`listening on port: ${PORT}`);
})