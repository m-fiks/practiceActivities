//1 & 4 should return 10 
// add all the numbers between the 2 numbers passed in

function sumAll(arr) {
    let greatest = Math.max.apply(null, arr)
    let smallest = Math.min.apply(null, arr)
    console.log(smallest)
    let newArray = [];
    for (let i=smallest; i <= greatest; i++) {
        newArray.push(i)
        console.log(newArray)
    }
    return newArray.reduce((acc, currentValue) => acc + currentValue);
  }
  
  sumAll([1, 4]);