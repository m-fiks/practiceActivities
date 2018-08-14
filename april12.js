
// Create a function called nameChecker that takes two parameters, an array 
// of lowercase names and a number. For each name in the array that is longer
// than the number parameter, console.log out "The name 'name' is longer than 
// 'number' characters". Return an array of names that are longer than the number
// from the function and console that out as well. 

//To run this function `cd` to the directory the file is in and run `node whateverYouNameThis.js`

//below is JS docs
//documentation for functions

const userArg = process.argv[2];
console.log(userArg);

/**
 * This function returns an array of names longer than the numnber parameter
 * @param {array} arrayParam 
 * @param {number} numberParam 
 * @return {array}
 */
function nameChecker(arrayParam, numberParam) {

if (isNaN(numberParam)) {
    console.log('You gotta enter a number');
}
// Your code here (probably .filter() and .map() among other things :)
    return arrayParam.filter((name) => name.length > numberParam)
    .map((name) => {
        console.log(`The name ${name} is longer than ${numberParam} characters`);
        return name;
    });

};

const namesArray = ['joshua', 'owen', 'miles', 'cassandra'];
const newArray = nameChecker(namesArray, userArg)
console.log(newArray)

// Expected output:
// The name Joshua is longer than 5 characters
// The name Cassandra is longer than 5 characters
// ['joshua', 'cassandra']
