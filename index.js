const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app = express();

const shoe = require('./models/shoesSchemaModel');

app.use(express.static('public'))

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


 app.get('/', function(req, res){res.redirect('/api/shoes')})
//gets all the data/shoes information from the database
//display this file as json data
app.get('/api/shoes', function(req, res) {

    shoe.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })

})

//get the the shoe brand information from the database
//display it as json data
app.get('/api/shoes/brand/:brandname', function(req, res) {

    shoe.find({
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
//display it as json data
app.get('/api/shoes/size/:size', function(req, res) {

    shoe.find({
        size: req.params.size
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

//get all the shoes size and brand from the database
//display it as json data
app.get('/api/shoes/brand/:brandname/size/:size', function(req, res) {
    shoe.findOne({
        brand: req.params.brandname,
        size: req.params.size
    }, function(err, result) {
        if (err) {
            console.log(err);
        } else if (result) {
            res.json(result);
        } else {
            res.send('not found')
        }
    })
})

// can create shoes in the database
app.post('/api/shoes', function(req, res) {
    var id = req.body.id
    var color = req.body.color
    var brand = req.body.brand
    var price = req.body.price
    var size = req.body.size
    var in_stock = req.body.in_stock

    shoe.create({
        id: id,
        color: color,
        brand: brand,
        price: price,
        size: size,
        in_stock: in_stock
    }, function(err, result) {
        if (err) {
            console.log(err);
        } else if (result) {
            res.json(result)
        }
    })
})


// sold route can sell stock and decrement the data in the database
app.post('/api/shoes/sold/:id', function(req, res, next) {

    shoe.findById(
        req.params.id,
        function(err, result) {
            if (err) {
                console.log(err);
            }
            if (result) {
                console.log(result);
                result.in_stock--;
                result.save(function(err, result) {
                    if (err) {
                        console.log(err);
                    }
                    if (result) {
                        res.json(result)
                    }
                })
            }
        })
})

var port = process.env.PORT || 7070;

app.listen(port, function() {
    console.log("This is where the magic happens :", port);
})
