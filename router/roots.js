const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");




router.get('/', (req, res) => {
  res.redirect('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create({ username, password });
    res.redirect('login');
  } catch {
    res.send('User already exists or error occurred');
  }
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && await user.comparePassword(password)) {
    req.session.userId = user._id;
    res.redirect('dashboard');
  } else {
    res.send('Invalid credentials');
  }
});




module.exports= router;