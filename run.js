const bandList = require ('./bands.js');
// const empty = Object.keys(bandList).length;
// if (empty === 0){
//     console.log('you gotta enter some bands');
// };

const userArgs = process.argv[2];

if(userArgs in bandList){
    for (let key in bandList) {
        if(key === userArgs){
        console.log(`A ${key} band is ${bandList[key]}`)
        }
    }
} else {
    for (let key in bandList) {
    console.log(`A ${key} band is ${bandList[key]}`)
    }
}
