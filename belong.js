function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num)
    arr.sort((a,b) => a - b);
    //console.log(arr.indexOf(num))
    return arr.indexOf(num);
  }
  
getIndexToIns([3, 10, 5], 3);