const UserSearch = require('./weathersearch.js');
const inquirer = require('inquirer');
const PrintDeals = require('./printstuff.js').PrintDeals;
const ShowDeals = require('./printstuff.js').ShowDeals;
const moment = require('moment');

//console.log(ShowDeals);

inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Which are you',
        choices: ['admin', 'user'],
        name:'userType'
    },
]).then(answers =>{

    //stop questions if usertype = admin
    if (answers.userType == 'admin'){
        const okay = new PrintDeals(answers.name, answers.location, moment().format('LLLL'));
        const displaydisplay = new ShowDeals(answers.userType);
    } 
    else{
        restOfIt();
    }
});

function restOfIt () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter a location',
            name: 'location'
        }
    ]).then(answers => {
            const searchOne = new UserSearch(answers.name, answers.location);
            searchOne.showWeather();
            const okay = new PrintDeals(answers.name, answers.location, moment().format('LLLL'));
    });
};