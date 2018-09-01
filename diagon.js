const arr = [3,
            11, 2, 4,
              4, 5, 6,
             10, 8, -12]

function diagonalDifference(arr) {
    let arr1 = arr.slice(1,4)
    let arr2 = arr.slice(4,7)
    let arr3 = arr.slice(7,10)
    //console.log(arr1, arr2, arr3)

    let right = 0;
    let left = 0;
    right= arr1[0] + arr2[1] + arr3[2]
    left = arr1[2] + arr2[1] + arr3[0]

    let value = Math.abs(right - left);
    return parseInt(value);

}

console.log(diagonalDifference(arr));