const BookService = require('../services/BookService');

module.exports.createBook = function* createBook() {
  const body = this.request.body;
  const book = {
    genres: body.genres,
    author: {
      firstName: body.author.firstName,
      lastName: body.author.lastName,
    },
    title: body.title,
  };
  this.response.body = yield BookService.addBook(book);
};

module.exports.getAllBooks = function* getAllBooks() {
  const books = yield BookService.getAllBooks();
  this.response.body = books;
};

module.exports.randomize = function* randomize() {
  BookService.initWithRandomData();
};
