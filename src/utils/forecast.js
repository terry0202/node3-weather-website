const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?'+latitude&longitude+'&appid=b388c7515279f44dd7916502d073ef95'
    
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(response, response.body.weather[0].description + ', it is currently ' + response.body.main.temp + ' degree out there')
        }
    })
}

module.exports = forecast