
function Programmer (name, jobTitle, age, faveLang){
    this.name = name;
    this.jobTitle = jobTitle;
    this.age = age;
    this.faveLang = faveLang;
    this.printEm = function (){
        console.log(`Name: ${name}, Job: ${jobTitle}, Age: ${age}, Fave language: ${faveLang}`)
        fs.appendFile('ppl.txt', name + jobTitle + age + faveLang, 'utf8', (err, data)=>{
            if (err){
                console.log(err);
            }
        });
    }
};

module.exports = Programmer;