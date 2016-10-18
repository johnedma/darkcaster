

var express = require('express');
var router = express.Router();
var axios = require('axios');
var apiKey = require('../config.js').apiKey;
var timeoutConfig = {
  timeout: 2000
};



router.get('/forecast/:latitude,:longitude', function(request, response){
  var url = buildForecastURL(request.params.latitude, request.params.longitude);
  // response.send(" Latitude: " + request.params.latitude + " Longitude: " + request.params.longitude);
  axios.get(url)
  .then(function(forecast){
    response.send(forecast.data);
  })
  .catch(function(error){
    response.send(error);
  });
});

module.exports = router;

function buildForecastURL(latitude, longitude){
    var url = 'https://api.darksky.net/forecast/'+ apiKey +'/'+ latitude +','+ longitude;
    return url;
}
