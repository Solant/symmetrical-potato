const AuthorService = require('../services/AuthorService');

module.exports.addAuthor = function* addAuthor() {
  const firstName = this.request.body.firstName;
  const lastName = this.request.body.lastName;
  const author = yield AuthorService.addAuthor(firstName, lastName);
  this.response.body = author;
};

module.exports.getAuthorList = function* getAllAuthors() {
  this.response.body = yield AuthorService.getAllAuthors();
};
