const request = require('request')


var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/c63f06c8428a9c387ecf35ae1a0e4beb/${lat},${lng}?units=auto`,
        json:true
    }, (error, response, body) => {
        if (!error && response.statusCode===200){
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            })
        } else {
            if(error) {
            callback("Unable to get data")
            }

        }
    })
}

module.exports.getWeather = getWeather