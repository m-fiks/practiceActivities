// Write a function that takes an array of names and returns a dedupped 
// array of properly capitalized names sorted alphabetically

// First require your data

const nameArray = require('./names.js')
//console.log(nameArray);

/**
* This function takes an array of names and returns a dedupped array sorted alphabetically and capitalized
* @param {array} names 
* @return {array}
*/
const nameSorter = names => {
    // You aweosme code here. Probably map(), slice(), sort() and charCodeAt()
    // as well as your spread operator and set() plus much, much more!!
    //start with all letters lowercase
    const allLower = names.map((elem) => elem.toLowerCase());
    // console.log(allLower)
    //capitalize 0 index, return full string
    const firstUpper = allLower.map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1));
    //console.log(firstUpper);

    //use sort() to get in alphabetical order
    const alphabetized = firstUpper.sort();

    //use new Set to get unique values
    //A VALUE IN THE SET MAY ONLY OCCUR ONCE
    
    //const final = Array.from(new Set(alphabetized));
    
    //OR SPREAD OPERATOR
    const final = [...new Set(alphabetized)];

    return final;
  }

//nameSorter(nameArray);
  // Don't uncomment until your require is working!

console.log(nameSorter(nameArray))
  // Expected output:
  // [ 'Cassandra', 'Josh', 'Miles', 'Owen' ]