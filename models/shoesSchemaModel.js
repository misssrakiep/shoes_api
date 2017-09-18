var mongoose = require('mongoose');

const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesCatalogue";

mongoose.connect(mongoURL, {
    useMongoClient: true
}, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("This is where the awesome takes place");
    }
});

var shoesCatalogueSchema = new  mongoose.Schema({
    color : String,
    brand : String,
    price : Number,
    size : Number,
    in_stock : Number

});

const shoes = mongoose.model('shoes' , shoesCatalogueSchema);



module.exports = shoes;
