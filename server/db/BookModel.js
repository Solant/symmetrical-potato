const mongoose = require('mongoose');
const Author = require('./AuthorModel');

const Book = new mongoose.Schema();
Book.add({
  genres: [String],
  author: {
    firstName: String,
    lastName: String,
  },
  title: {
    type: String,
    intdex: true,
  },
});

module.exports = mongoose.model('Book', Book);
