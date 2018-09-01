// Write a function that will loop through 
// a list of integers and print the index 
// of each element after a 3 second delay.

const arr = [10, 12, 15, 21];

setTimeout(() => {
    arr.forEach((elem, i) => console.log(i))
}, 3000);

const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}