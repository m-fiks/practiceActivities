let fs = require('fs');

console.log(process.argv)

let appendingData = process.argv[2];

fs.appendFile('app.txt', appendingData, 'utf8', (err, data) => {

    if(err){
        return console.log(err);
    }

    else {
        console.log('success!');
    }
});


