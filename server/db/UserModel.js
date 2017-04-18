const mongoose = require('mongoose');

const User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  favoriteGenres: [String],
  cash: Number,
});
module.exports = mongoose.model('User', User);
