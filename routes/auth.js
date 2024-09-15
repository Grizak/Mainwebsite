const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password, role: 'admin' }); // Assign role dynamically as needed
    await user.save();
    res.json({ message: 'User registered successfully' });
    res.sendFile(path.join(__dirname, '../public/html/account/login.html'));
  } catch (err) {
    res.status(500).json({ error: err.message });
    res.sendFile(path.join(__dirname, '../public/html/account/register.html'));
  }
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Logged in successfully' });
  res.sendFile(path.join(__dirname, ''))
});

// Logout
router.get('/logout', (req, res) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.json({ message: 'Logged out successfully' });
    res.sendFile()
  });
});

module.exports = router;
