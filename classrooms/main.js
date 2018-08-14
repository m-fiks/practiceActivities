const inquirer = require('inquirer');

const Classroom = require('./classrooms.js');
//console.log(Classroom);

const one = new Classroom('Sarah', 303);
// console.log(one);
one.addStudent('Lisa', 'math', 3.4);
one.addStudent('Billy', 'Bio', 2.5);
one.addStudent('Eliza', 'english', 4.0);
//console.log(one.students.length);

// * BONUS: Make it so that that your application can take in user input to add 
//new classes and new students to those classes.
// * HINT: For the bonus, make sure that the number of 
//students in the class is updated as you add new students

inquirer.prompt([
    {
        type: 'input',
        message: 'Enter the professors name',
        name: 'profname'
    },
    {
        type: 'input',
        message: 'Enter the room number',
        name: 'roomnumber'

    },
]).then(answers =>{
    const two = new Classroom(answers.profname, answers.roomnumber);
    console.log(two);
    let counter = 0;
    recursive();

function recursive() {
    counter++;
    inquirer.prompt([
    {
        type:'input',
        message: 'enter a student name',
        name: 'name'
    },
    {
        type:'input',
        message: 'Please enter in your favorite subject',
        name: 'faveSubject'
    },
    {
        type:'input',
        message: 'please enter your GPA',
        name: 'gpa'
    }
]).then(answers =>{
    two.addStudent(answers.name, answers.faveSubject, answers.gpa);
    if (counter < 2){
        recursive();
    } else{
        console.log(two.students);
        };
   
    });
};

});


