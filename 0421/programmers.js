// In this activity, we are going to create a constructor function called "Programmer" which can be used to create objects containing information on various programmers.
// Your "Programmer" constructor should be able to take in the following information...
// The programmer's name
// Their position/job title
// How old they are
// Favorite programming language
const inquirer = require('inquirer');
const fs = require('fs');
//console.log(fs);
//console.log(inquirer);
//require exports.js
const construc = require('./export.js');
console.log(construc);

// const person1 = new Programmer ('Maddy', 'Developer', '25', 'JavaScript');
// const peeps = [];


//person1.printEm();

// Now create a method for the constructor that would print all of the information contained within an object to the console.
// Finally, create a "Programmer" object and call the method to print its contents
let counter = 0;
function recursion () {
    counter++;
    console.log(counter);
inquirer.prompt([
    {
        type:'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type:'input',
        message: 'What is your job title?',
        name: 'job'   
    },
    {
        type:'input',
        message:'How old are you?',
        name: 'age'
    },
    {
        type: 'checkbox',
        message: 'Choose your favorite programming language',
        choices: ['JavaScript', 'Python', 'Java'],
        name: 'faveLang'
    }
]).then(answers => {
            //console.log(answers);
            const person = new Programmer (answers.name, answers.job, answers.age, answers.faveLang);
            peeps.push(person);

            if (counter < 2) {
                recursion();
            } else {
               for (let i =0; i < peeps.length; i++){
                   peeps[i].printEm();
               }
            };
        }).catch(err => {
            console.log('whoops! sorry, try again');
        });
};


recursion();