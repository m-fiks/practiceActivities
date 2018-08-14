const weather = require('weather-js');
const moment = require('moment');

function UserSearch (name, location){
    this.name = name;
    this.location = location;
    this.showWeather = function () {
        //console.log(name, location);
        weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
            
            console.log(result[0].location.name);
            console.log(result[0].current)
        });
    };
};


    //console.log('it did the thing');
    //console.log(JSON.stringify(result, null, 2));

module.exports = UserSearch;