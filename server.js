const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./models/user');
const path = require('path');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/authApp');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.use(session({
  secret: 'secretKey123',
  resave: false,
  saveUninitialized: true
}));

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.session.userId) next();
  else res.redirect('/login');
}
// Routers
app.use(require('./router/roots'));

app.get('/dashboard', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.session.userId);
    res.render('dashboard', { user });
  });

app.post('/delete', isLoggedIn, async (req, res) => {
    await User.findByIdAndDelete(req.session.userId);
    req.session.destroy();
    res.redirect('register');
});
app.listen(3000, () => console.log('Server started on http://localhost:3000'));