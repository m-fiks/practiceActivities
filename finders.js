// Create a function that looks through an array (first argument) and 
// returns the first element
// in the array that passes a truth test (second argument). 
// If no element passes the test, return undefined.

function findElement(arr, func) {
    //let num = 0;
    let passing = arr.filter((elem) => {
        return elem % 2 === 0;
    })
    return passing[0];
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);