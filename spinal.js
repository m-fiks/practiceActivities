function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    // if (str.includes(" ")) {
    //     return str.toLowerCase().split(" ").join("-");        
    // }
    // else if (str.includes("_")) {
    //     return str.toLowerCase().split("_").join("-");
    // }
    const regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    console.log(str.replace(regex, '-').toLowerCase())
    //return str;
  }
  
  spinalCase('This Is Spinal Tap');