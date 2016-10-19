var express = require('express');
var router = express.Router();
var path = require('path');

router.get("/", function(request, response){
  response.sendFile("public/html/index.html", {root: path.resolve('./')});
});

module.exports=router;
