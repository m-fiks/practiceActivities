// Write a function that takes a string and returns an object 
// representing the character count for each letter.

const letterCounter = string => {
    // Awesome code here!! Use you mdn .reduce() docs!!
    const array = string.split('');
    
    // const counted = array.reduce(function(allletters, letter){
    //     if (letter in allletters){
    //         allletters[letter]++;
    //     }
    //     else{
    //         allletters[letter] = 1;
    //     }

    //     return allletters;
    // })
};
  
  const result = letterCounter('abbcccddddeeeee')
  console.log(result)
  // Expected Output:
  // {a:1, b:2, c:3, d:4, e:5}