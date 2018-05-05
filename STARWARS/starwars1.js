// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};
// Create one more data entry for the character Obi Wan Kenobi.
const obi = {
    name: 'Obi Wan Kenobi',
    role: 'Jedi',
    age: 900,
    forcePoints: 5800
};
// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", (req, res) => {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", (req, res) => {
  res.json(yoda);
});

app.get("/darthmaul", (req, res) => {
  res.json(darthmaul);
});

app.get("/obi", (req,res) => {
    res.json(obi)
})
// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
