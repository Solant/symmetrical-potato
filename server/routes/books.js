const Book = require('../db/BookModel');

module.exports.createBook = function* createBook() {
  const body = this.request.body;
  const book = new Book({
    genres: body.genres,
    author: {
      firstName: body.author.firstName,
      lastName: body.author.lastName,
    },
    title: body.title,
  });
  const savedBook = yield book.save();
  console.log('Created book');
};

module.exports.getAllBooks = function* getAllBooks() {
  const books = yield Book.find({});
  console.log(books._doc.length);
};
