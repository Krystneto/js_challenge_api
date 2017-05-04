const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String,
    description: String
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
