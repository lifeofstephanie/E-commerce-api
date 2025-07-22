const express = require('express');
const { getProducts, addProduct, deleteProduct } = require('../controllers/productController');
const { auth, isAdmin } = require('../middleware/auth');
const router = express.Router();

router.get('/', getProducts);
router.post('/', auth, isAdmin, addProduct);
router.delete('/:id', auth, isAdmin, deleteProduct);

module.exports = router;
