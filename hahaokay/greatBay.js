const inquirer = require('inquirer');
const mysql = require('mysql');


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'greatBay_DB'
});


connection.connect((err) => {
  if (err) throw err;
  console.log("connection established");
  displayQuestion();
});


//console.log(inquirer);


function displayQuestion() {
  inquirer.prompt([{
    name: "greatBay",
    message: "post / bid",
    type: "list",
    choices: ["post", "bid"]

  }]).then((answers) => {

    switch (answers.greatBay) {
      case "bid":
        console.log("In bid");
        getAllItems();
        break;
      case "post":
        console.log('In post');
        inquirer.prompt([
          ItemQuestion, categoryQuestion, startingBidQuestion, highestBidQuestion
        ]).then((answers) => {
          console.log(answers);
          postItem(answers);
          displayQuestion();
        });
        break;

      default:
        break;
    }

  });
}



const ItemQuestion = {
  message: "ItemName",
  type: "input",
  name: "item_name"
}

const categoryQuestion = {
  message: "category",
  type: "input",
  name: "category"
}

const startingBidQuestion = {
  message: "starting_bid",
  type: "input",
  name: "starting_bid"
}

const highestBidQuestion = {
  message: "highest_bid",
  type: "input",
  name: "highest_bid"
}

function postItem(answers) {

  const item_name = answers.item_name;
  const category = answers.category;
  const starting_bid = answers.starting_bid;
  const highest_bid = answers.highest_bid;

  console.log(item_name);

  const val = [
    [item_name, category, parseInt(starting_bid), parseInt(highest_bid)]
  ];
  console.log(val);
  connection.query(`INSERT INTO auctions (item_name, category, starting_bid, highest_bid) VALUES ?`, [
    val
  ], function (err, res) {
    console.log(res);
    //connection.end();
  });
}

function getAllItems() {

  let itemToSelect;

  connection.query(`SELECT * FROM auctions`, function (err, res) {
    let choices = []

    for (let i = 0; i < res.length; i++) {
      choices.push(res[i].item_name);
    }

    inquirer.prompt({
      message: "select Item to Bid",
      name: "itemToBid",
      type: "list",
      choices: choices
    }).then((answers) => {

      console.log(answers);
      itemToSelect = answers.itemToBid;
      inquirer.prompt({
        message: "your bid",
        type: "input",
        name: "userBid"
      }).then((answers) => {
        // const item_name = answers.userBid;
        console.log(itemToSelect);
        console.log(answers.userBid);

        connection.query(`SELECT highest_bid FROM auctions WHERE item_name="${itemToSelect}"`, function (err, res) {
          //console.log(res);

          console.log("response", res[0].highest_bid);
          if (res[0].highest_bid >= answers.userBid) {
            console.log("your bid was lower");
            displayQuestion();
          }

          else {
            console.log("you win");
            connection.end();
          }

        });

      })
    })

  });


}