function diffArray(arr1, arr2) {
    const newArr = [];
    const final = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])){
        console.log(arr1[i])
      }
      else {
        newArr.push(arr1[i])
      }
    }

    for (let j = 0; j < arr2.length; j++){
      if (arr1.includes(arr2[j])){
        console.log(arr2[j])
      }
      else {
        newArr.push(arr2[j])
      }
    }
 
   
    console.log(newArr)
    return newArr;
  }
  
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  //diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);