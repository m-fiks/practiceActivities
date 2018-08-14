//needed to run FileSystem
const fs = require('fs');

//utf8 makes it human-readable
fs.readFile('read.txt', 'utf8', (error, data) => {
    //use return here to stop the function if there is an error
    if (error){
        return(console.log(error));
    };

    // console.log(data);

    // //split at comma, make into array
    let books = data.split(', ');
    //console.log(books);

    // for (let i=0; i <books.length; i++){
    //     console.log(books[i]);
    // }

    //OR

    books.forEach((thing) => {
        console.log(thing);
    });

});

fs.appendFile('read.txt','hi', (err,data) => {
})