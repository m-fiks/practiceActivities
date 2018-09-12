function mutation(arr) {
    let str1 = arr[0].toLowerCase().split('')
    let str2 = arr[1].toLowerCase().split('')
    let wrongs = 0;

    for(let j=0; j<str2.length; j++){
        if (str1.indexOf(str2[j]) === -1){
            wrongs += 1;
        }
    }

    if (wrongs > 0){
        return false;
    }
    else {
        return true;
    }

    
    }

console.log(mutation(["hello", "hey"]));