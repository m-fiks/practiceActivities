let base = "http://www.google.com";
let endPoint = "/?20bebeboo"
let arr = [{"key": "keyOne", "value": "valueOne"}, {"key": "keyTwo", "value": "valueTwo"}]

//given dealios above put all the things together to form a URL

const urlMaker = (base, ep, arr) => {
    let newUrl = "";
    let newStr = "";
    newUrl += base + ep
    
    for(let i=0; i<arr.length; i++){
        let final = "";
        final += `${arr[i].key}:${arr[i].value}`
        newUrl += final;
    }

    console.log(newUrl);
}

urlMaker(base, endPoint, arr);