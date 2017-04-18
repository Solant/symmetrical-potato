const Author = require('../db/AuthorModel');

module.exports.addAuthor = function* addGenre() {
  const author = new Author({
    firstName: this.request.body.firstName,
    lastName: this.request.body.lastName,
  });
  author.save().catch(reason => console.log(reason));
};

module.exports.getAuthorList = function* getAllAuthors() {
  const a = yield Author.find({});
  console.log(`${a.length} documents returned`);
};
