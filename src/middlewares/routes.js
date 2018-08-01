const express = require('express');
const getProducts = require('../routes/getProducts');
const getProductsById = require('../routes/getProductsById');
const getproductsByIdReviews = require('../routes/getProductsByIdReviews');
const getUsers = require('../routes/getUsers');
const postProducts = require('../routes/postProducts');
const home = require('../routes/home');

const router = express.Router();

router.get('/api/products', getProducts);
router.get('/api/products/:id', getProductsById);
router.get('/api/products/:id/reviews', getproductsByIdReviews);
router.get('/api/users', getUsers);
router.post('/api/products', postProducts);
router.get('*', home);

module.exports = router;
