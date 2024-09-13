const express = require('express');
const User = require('./models/user.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Registration Route
router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Create a new user
    const user = new User({ username, email, password });
    await user.save();

    res.redirect('/auth/login');
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

// Login Route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid Email');
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send('Invalid Password');
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Send token as a cookie (or handle in another way)
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Login error');
  }
});

module.exports = router;
