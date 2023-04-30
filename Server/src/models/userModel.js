const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, { timestamps: true });

// Hash the password before saving the user
userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);

  return next();
});

// Check if password is correct
userSchema.methods.checkPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  return match;
};

module.exports = mongoose.model('User', userSchema);