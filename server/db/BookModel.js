const mongoose = require('mongoose');

const Book = new mongoose.Schema();
Book.add({
  genres: [String],
  author: {
    firstName: String,
    lastName: String,
  },
  title: String,
});
Book.index({ title: 1 });

module.exports = mongoose.model('Book', Book);
