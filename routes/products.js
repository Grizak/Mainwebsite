const express = require('express');
const router = express.Router();
const Product = require('../models/product'); // Assuming you've set up a Product model

// Middleware to ensure admin access
function ensureAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  }
  res.status(403).json({ message: 'Access denied' });
}

// Fetch products (accessible by everyone)
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add a product (admin only)
router.post('/', ensureAdmin, async (req, res) => {
  const { name, description, price, image } = req.body;
  const newProduct = new Product({ name, description, price, image });
  await newProduct.save();
  res.json({ message: 'Product added successfully' });
});

// Delete a product (admin only)
router.delete('/:id', ensureAdmin, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
});

module.exports = router;
