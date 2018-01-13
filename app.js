
const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe:'address to fetch weather for',
            string: true
        }
})
.help()
.alias('help','h')
.argv;

//adding a callback function to geocode address
//lecture 35
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address)

        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults)=>{
            if (errorMessage){
                console.log(errorMessage);
            } else {
                console.log(`It's currently ${weatherResults.temperature}, but if feels like ${weatherResults.apparentTemperature}.`)
            }
        })
    }
})






