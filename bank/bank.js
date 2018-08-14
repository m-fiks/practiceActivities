let fs = require('fs');

//console.log(process.argv[3]);

//action: withdraw, deposit, total, lotto
let action = process.argv[2];
let amount = process.argv[3];


if (action === 'withdraw'){
    //subtract from total
    withdraw();

} else if (action === 'deposit'){
    //add to total
    deposit();

} else if (action === 'total'){
    //display total
    total();
}

function total(){
    fs.readFile('bank.txt', 'utf8', (err, data)=>{
        if(err){
            console.log(err);
        }

        data = data.split(',');
        //console.log(data);
        let result = 0;

        for(let i=0;i<data.length;i++){
            if(parseFloat(data[i])){
                result += parseFloat(data[i]);
            }
        }

        console.log('You have this much:' + result);
    })
}

function deposit(){
    //add to file to keep ledger
fs.appendFile('bank.txt', ', ' + amount, 'utf8', (err, data) =>{
    if(err){
        return console.log(err);
    };
    console.log('Deposited:' + amount);
});
};

function withdraw(){
    fs.appendFile('bank.txt',', -' + amount, 'utf8', (err,data) => {
        if(err){
            return console.log(err);
        };
        console.log('Withdrew:' + amount);
    });
};