var express = require('express')
app = express();


var port = process.env.PORT || 7070;

app.listen(port, function(){
  console.log("we are good to go at" , port);
})
