// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:
const inquirer = require('inquirer');
//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm
inquirer.prompt([
    { type: 'input',
        message: 'What is your name?',
        name: 'username'
    },
    {
        type:'confirm',
        message:'Are you sure?',
        choices: ['yes', 'no'],
        name: 'confirmed'
    },
    {
        type:'input',
        message: 'Create your password.',
        name: 'password'
    },
    { type:'list',
        message: 'What is your fave color?',
        choices: ['red','green','blue', 'pink'],
        name: 'favecolor'
    },
    { type: 'checkbox',
        message: 'Choose your fave animals',
        choices: ['cat', 'dog', 'ferret'],
        name: 'faveanimal'
    },
    {
        type:'confirm',
        message:'Are you sure?',
        choices: ['yes', 'no'],
        name: 'confirmed'
    }
]).then(answers => {
    console.log(`Welcome ${answers.username}, I also like ${answers.faveanimal}s!`)

});
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================