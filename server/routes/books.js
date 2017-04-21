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

module.exports.getSomeBooks = function* getSomeBooks() {
  const params = {
    pageNumber: parseInt(this.params.pageNumber, 10),
    pageSize: parseInt(this.params.pageSize, 10),
  };
  const obj = yield BookService.getSomeBooks(params);
  obj.totalSize = yield BookService.getBookSize();
  this.response.body = obj;
};

module.exports.getBooksInfo = function* getBooksInfo() {
  this.response.body = yield BookService.getBooksInfo();
};

module.exports.deleteBook = function* deleteBook() {
  yield BookService.deleteBook(this.params.id);
  this.response.status = 200;
};
