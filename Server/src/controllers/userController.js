const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/userModel');

// User login controller
const login = async (req, res, next) => {
  passport.authenticate('local', { session: false }, async (err, user, info) => {
    try {
      if (err || !user) {
        const error = new Error(info.message);
        return next(error);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        return res.json({ user, token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};

// User registration controller
const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error('User already exists');
      return next(error);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);

    return res.json({ user: newUser, token });
  } catch (error) {
    return next(error);
  }
};

module.exports = {register,login}