const fs = require("fs");
const weatherSearch = require('./weathersearch.js')

function PrintDeals (name, location, time){
    fs.appendFile('log.txt', `\n Name: ${name}, Location: ${location}, Time: ${time}`, (err) =>{
        if(err) console.log(err);
    })
}

function ShowDeals (typeOfUser){
    fs.readFile('log.txt', 'utf8', (err, data)=>{
        if (err) console.log(err);
        console.log(data);
    });
};


module.exports = {
    PrintDeals,
    ShowDeals
};