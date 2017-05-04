const mongoose = require('./database');

const Product = require('../models/product');

const coolProduct = new Product({
    id: 1,
    name: "toilet",
    price: 200,
    image: "www.example.com",
    description: "Nice and kinda white"
})

coolProduct.save();

Product.remove({}, err => {
  if (err) console.log(err);
  Product.create(coolProduct, (err, products) => {
    if (err) {
      console.log(err)
    } else {
      console.log("User has been seeded to Database");
      mongoose.connection.close();
    }
    process.exit();
  })
})