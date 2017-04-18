const mongoose = require('mongoose');

const Author = new mongoose.Schema({
  firstName: String,
  lastName: String,
});
module.exports = mongoose.model('Author', Author);
