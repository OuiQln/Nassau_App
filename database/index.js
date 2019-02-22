const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/product', {
    useNewUrlParser: true
})

const db = mongoose.connection; 

db.on('error', () => console.log ('error connecting to the database'));
db.once ('open', () => console.log ('connected to the database'));

let productSchema = mongoose.Schema({ 
    name: String,
    sku: Number,
    stars: Number,
    price: String,
    colors: Array,
    sizes: Array, 
    details: Array, 
    material: String, 
    care: String, 
    pictures: Array
  });

let Product = mongoose.model('Product', productSchema);

module.exports = Product;