function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let truths = [];
    arr.forEach(elem => {
        if (elem){
            truths.push(elem)
        }
    })
    //console.log(truths)
    return truths;
  }
  
  bouncer([7, "ate", "", false, 9]);