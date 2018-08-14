// Express Calculator

// ## Instructions

// * You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.

// * There are four operation values which a user may use: addition, subtraction, multiplication, and division.

// * When the route is hit, your browser should display the result of the math operation.

// * For example, when the user goes to the url <http://localhost:3000/add/10/1>, the page should display 11.

// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
// params optional use ?
app.get("/:operation/:num1/:num2", function(req, res) {
    let operation = req.params.operation;
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    // Initialize the result variable to send later
    let result;
    console.log(operation, num1, num2)
  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

//   // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "+":
  case "add":
    // Add your logic here. Pun intended.
    result = num1 + num2;
    break;
  case "-":
  case "subtract":
    result = num1 - num2;
    break;
  case "*":
  case "multiply":
    // Multiply
    result = num1 * num2;
    break;
  case "divide":
    // Divide
    result = num1/num2;
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
    res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});