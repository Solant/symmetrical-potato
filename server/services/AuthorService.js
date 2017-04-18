const AuthorModel = require('../db/AuthorModel');

module.exports = class AuthorService {
  static addAuthor(firstName, lastName) {
    const author = new AuthorModel({ firstName, lastName });
    return author.save()
    .then(model => model.toObject())
    .catch(error => ({
      error,
    }));
  }

  static getAllAuthors() {
    return AuthorModel.find({}).then((model) => {
      const authors = model.map(arg => ({ firstName: arg.firstName, lastName: arg.lastName }));
      return authors;
    });
  }
};
