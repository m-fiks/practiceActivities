// You will be provided with an initial array
// (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all
// elements from the initial
// array that are of the same value as these arguments.
// you must use the arguments object

// see if arg[0] has any of the items in further args
// if yes --> remove that from arg[0]
// if no --> leave that bad boy in there

function destroyer(arr) {
    let args = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }
  
  destroyer([2, 3, 2, 3], 2, 3)