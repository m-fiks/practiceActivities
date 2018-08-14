

// * The second constructor function is called "Class" and has the following properties within it...
//   * An array of students within the class
//   * Number of students in the class
//   * Name of the professor
//   * Room number
//   * The Student constructor function from above which adds a new student to the class

const Student = require('./students.js');
//console.log(Student);

function Classroom (profName, roomNumber) {
    this.students = [];
    this.profName = profName;
    this.roomNumber = roomNumber;
    this.addStudent = function(name, faveSubject, gpa){
        this.students.push(new Student(name, faveSubject, gpa))
    };
};

module.exports = Classroom;