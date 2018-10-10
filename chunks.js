//split into two arrays 
//size of array is the number given
function chunkArrayInGroups(arr, size) {
    // Break it up.
    let results = [];

    while (arr.length) {
        results.push(arr.splice(0, size))
    }

    return results;

  }
  
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)