const Product = require('../models/product');
const faker = require('../config/faker.js');

showProducts = (req, res) => {
    res.json({faker})
};

saveProduct = (req, res) => {
    console.log(req.body)
    res.json('hi')
};

module.exports = {
    showProducts,
    saveProduct
};