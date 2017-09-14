const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app = express();

const models = require('./models/shoesSchemaModel');

app.use(express.static('public'))

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//gets all the data from the database
app.get('/api/shoes', function(req, res) {

    models.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })

})

//get the the shoe brand from the database
app.get('/api/shoes/brand/:brandname', function(req, res) {

    models.find({
        brand: req.params.brandname
    }, function(err, result) {
        if (err) {
            console.log(err);
        } else if (result) {
            res.json(result)
        } else {
          res.send('not found')
        }
    })

})

//get all the shoes sizes from the database
app.get('/api/shoes/size/:size', function(req, res){

  models.find({
    size: req.params.size
  }, function(err, result){
    if (err) {
      console.log(err);
    } else if (result) {
      res.json(result)
    } else {
      res.send('not found')
    }
  })
})

//get all the shoes size and brand from the database
app.get('/api/shoes/brand/:brandname/size/:size', function(req,res){
  models.findOne({
    brand: req.params.brandname,
    size: req.params.size
  }, function(err ,result){
    if (err){
      console.log(err);
    }else if (result) {
      res.json(result);
    } else {
      res.send('not found')
    }
  })
})



var port = process.env.PORT || 7070;

app.listen(port, function() {
    console.log("we are good to go at", port);
})
