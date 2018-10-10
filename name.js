function whatIsInAName(collection, source) {
    // What's in a name?
    // Only change code below this line
    let srcKeys = Object.keys(source);
       
    return collection.filter((obj) => {
        for(let i=0; i<srcKeys.length; i++) {
            if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]] ){
                return false
            }
        }
        return true;
    })
    // Only change code above this line
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, 
  { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });