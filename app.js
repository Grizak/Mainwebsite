const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/djlarkiboy', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use auth routes
app.use(authRoutes);

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/home.html'));
});

// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/about.html'));
});

// Route for contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/contact.html'));
});

// Route for equipment page
app.get('/equipment', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/eqipment.html'));
});

app.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/faq.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/account/login.html'));
});

app.get('/register', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/html/account/register.html'));
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
