const mongoose = require('mongoose');

const Genre = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    unique: true,
  },
});
module.exports = mongoose.model('Genre', Genre);
