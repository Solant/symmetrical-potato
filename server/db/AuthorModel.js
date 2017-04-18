const mongoose = require('mongoose');

const Author = new mongoose.Schema({
  fistName: String,
  lastName: String,
});

module.exports = mongoose.model('Author', Author);
