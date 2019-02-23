const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/ouiqln', {
    useNewUrlParser: true
})

const db = mongoose.connection; 

db.on('error', () => console.log ('error connecting to the database'));
db.once ('open', () => console.log ('connected to the database'));

let productSchema = mongoose.Schema({
    _id: Number,
    breadcrumbs: Array, 
    name: String,
    sku: Number,
    stars: Number,
    reviews: Number,
    price: String,
    colorNames: Array,
    colors: Array,
    sizes: Array, 
    details: Array, 
    material: String, 
    care: String, 
    pictures: Array
  });

let Product = mongoose.model('Product', productSchema);

module.exports = Product;