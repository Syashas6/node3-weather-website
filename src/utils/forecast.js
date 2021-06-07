const request = require('request');

const forecast = function(lati,longi,callback){
    const url = 'http://api.weatherstack.com/current?access_key=7205c25be28a41c10e6d2a999fa6af76&query='+lati+','+longi+'&units=f';

    request({url: url, json:true},function(error,response){

        if(error){
            callback('Unable to connect to weather',undefined);
        }
        else if(response.body.error){
            callback('Unable to find location',undefined);
        }
        else {
            callback(undefined,{
                temp : response.body.current.temperature,
                we : response.body.current.weather_descriptions[0],
                hu : response.body.current.humidity
            })
        }

    })
}

module.exports = forecast;