function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    console.log('hi')
    return str.toLowerCase().split(' ').join('-');
  }
  
  spinalCase('This Is Spinal Tap');