const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Genre = new Schema();
Genre.add({
  name: {
    type: String,
    index: true,
  },
});
Genre.methods.findAll = function findAllGenres() {
  return this.findAll();
};
Genre.methods.save = function saveGenre(name) {
  const genre = new Genre({ name });
  genre.save();
};

const User = new Schema();
User.add({
  firstName: String,
  lastName: String,
  favoriteGenres: [Genre],
  cash: Number,
});

const Author = new Schema();
Author.add({
  fistName: String,
  lastName: String,
});

const Book = new Schema();
Book.add({
  genres: [Genre],
  author: Author,
  title: {
    type: String,
    intdex: true,
  },
});

mongoose.model('User', User);
mongoose.model('Author', Author);
mongoose.model('Book', Book);
mongoose.model('Genre', Genre);
