function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let newOne = arr1.slice(' ').reverse();
    let second = arr2.slice(' ')
    
    // console.log(newOne)
    newOne.forEach(elem => {
        second.splice(n, 0, elem);
    })
    console.log(second);
    
    return second;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);