const request = require('request');

const geocode = function(address, callback) {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoieWFzaGFzMzEzMTEiLCJhIjoiY2twYjNlNGllMHVzaTJ3bWtpZ251YXloayJ9.QYQlfDBC6uTXB7YFppuJRA';
    
    request({url: url, json: true},function(error,response){
        if(error)
        {
            callback("Unable to connect to weather",undefined);
        }
        else if(response.body.features.length === 0)
        {
            callback("Plaese enter proper address",undefined);
        }
        else{
            callback(undefined,{
                latitude : response.body.features[0].center[1],
                logitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

//Since we are exporting only one part of the code this is enough
module.exports = geocode;