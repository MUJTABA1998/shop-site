const express = require('express');
const router = express.Router();
const { getProducts, addProducts, removeProduct } = require('../controllers/products');



router
    .route('/')
    .get(getProducts)
    .post(addProducts)


router
    .route('/:id')
    .delete(removeProduct)


module.exports = router;