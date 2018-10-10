function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    collection.forEach((elem) => {
       if(elem.indexOf(source) > -1){
           console.log(elem)
       }
    })
    
    // Only change code above this line
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });