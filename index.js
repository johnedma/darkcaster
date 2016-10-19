var express = require('express');
var server = express();
var logger = require('./middleware/logger.js');
var cors = require('cors');
var authorize = require('./middleware/auth.js');

var forecastRouter = require('./routers/forecast.router.js');


var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));
server.use(logger);
server.use(cors());
server.use(authorize);

server.get("/", function(request, response){
  response.sendFile("public/html/index.html", {root: __dirname});
});

server.use(forecastRouter);

server.listen(port, function(){
  console.log("Now listening on port...", port);
});
