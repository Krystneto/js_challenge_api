const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const productsController = require('../controllers/productsController')

router.route('/products.json')
    .get(productsController.showProducts);

router.route('/products')
    .post(productsController.saveProduct);


module.exports = router;
