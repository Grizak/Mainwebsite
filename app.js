const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')
const bodyParser = require('body-parser');
const fs = require('fs')
const authRoutes = require('./routes/auth');
const session = require('express-session')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/djlarkiboy', {
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
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

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/account/register.html'));
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html/admin/dashboard.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'publc/html/account/logedin/dashboard.html'));
});

// Express session
app.use(session({
  secret: 'yourSecret',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/djlarkiboy' })
}));

// Passport middleware
require('./config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes for auth and product management
const productRoutes = require('./routes/products');
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

app.use(express.json());

// Load products
const getProducts = () => JSON.parse(fs.readFileSync('products.json'));

// Fetch all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Add a new product
app.post('/products', (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
  res.json(newProduct);
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  let products = getProducts();
  products = products.filter(p => p.id != req.params.id);
  fs.writeFileSync('products.json', JSON.stringify(products, null, 2));
  res.json({ message: 'Product deleted' });
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
