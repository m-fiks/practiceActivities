// // // Take a string as an input, reverse each individual word, return new string with reversed words.
// // const strInput = 'The cow jumped over the moon'
// // const strReverse = (string) => {
// //     let array = string.split('')
// //     let newArray = array.reverse().join('')
// //     return newArray;
// // }

// // console.log(strReverse(strInput))

// // // Write a program that prints the numbers from 1 to 100. 
// // // If it’s a multiple of 3, it should print “Fizz”. 
// // // If it’s a multiple of 5, it should print “Buzz”. 
// // // If it’s a multiple of 3 and 5, it should print “Fizz Buzz”.

// // for (let i=1; i <= 100; i ++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log(`${i} Fizz Buzz`);
// //     }
// //     else if(i % 3 === 0){
// //         console.log(`${i} Fizz`);
// //     }
// //     else if (i % 5 === 0){
// //         console.log(`${i} Buzz`);
// //     }
// //     else {
// //         console.log(i)
// //     }
// // }

// // //Reverse a sentence ("bob likes dogs" -> "dogs likes bob")
// // const senInput = "bob likes dogs"
// // const senReverser = (string) => {
// //    let array = string.split(' ')
// //    let newArray = array.reverse().join(' ')
// //    return newArray;
// // }

// // console.log(senReverser(senInput))



// function largestOfFour(arr) {
//     // You can do this!
//     const results = [];
//     for (let i = 0; i < arr.length; i++) {
//         let largestNumber = arr[i][0];
//         for(let j=1; j< arr[i].length; j++){
//             console.log(arr[i][j])
//             if (arr[i][j] > largestNumber) {
//                 largestNumber = arr[i][j]
//             }
//         }

//         results.push(largestNumber)
//     }
//     console.log(results);
//   }
  
//   //elem.forEach((inner) => {
//             //console.log(inner)
//         //     inner > largestNumber ? largestNumber = inner : largestNumber = largestNumber;
//         //     console.log(largestNumber);
//         // })
// //largestOfFour([[1,2,4,5], [4,3,2,6]])
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





    // ...
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map((current, i, wo) => {
//         return wo.indexOf(current) == wo.lastIndexOf(current) ? '(' : ')'
//     })
//     .join('');
// }

// .map( function (a, i, w) {
//     return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//   })

// console.log(duplicateEncode('ammELie'))

// function confirmEnding(str, target) {
//     // "Never give up and good luck will find you."
//     // -- Falcor
//     let letters = str.slice(str.length - target.length)
//     //let targetLetters = target.slice(target.length - (target.length - 3))
//     if (letters == target) {
//         return true;
//     }
//     else {
//         return false;
//     }
//   }
  
//   confirmEnding("Bastian", "n");
//   confirmEnding("Congratulation", "on")

//   function repeatStringNumTimes(str, num) {
//     // repeat after me
//     let repeatStr = "";
//     while (num > 0){
//     num--;
//     repeatStr += str;
//     }
//     return repeatStr;
//   }
  
//   console.log(repeatStringNumTimes("abc", 3));

function truncateString(str, num) {
    // Clear out that junk in your trunk
    let newString = ""
    if (str.length > num) {
        newString = str.slice(0, num) + "..."
    }
    else {
        newString += str;
    }
    return newString;
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));