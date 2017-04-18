const mongoose = require('mongoose');

const Genre = new mongoose.Schema({
  name: String,
});
Genre.index({ name: 1 }, { unique: true });
module.exports = mongoose.model('Genre', Genre);
