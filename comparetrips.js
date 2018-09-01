let a = [5,6,7]
let b = [7,6,5]

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    let scores = [];

    if(a[0] > b[0]) alice+=1;
    if(a[1] > b[0]) alice+=1;
    if(a[2] >b[2]) alice+=1;

    if(b[0] > a[0]) bob+=1;
    if(b[1] > a[1]) bob+=1;
    if(b[2] > a[2]) bob+=1;

    scores.push(alice)
    scores.push(bob)
    return scores;

  }

console.log(compareTriplets(a, b))