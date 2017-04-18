const UserService = require('../services/UserService');

module.exports.createUser = function* createUser() {
  const user = {
    firstName: this.body.firstName,
    lastName: this.body.lastName,
    favoriteBooks: this.body.favoriteBooks,
    cash: this.body.cash,
  };
  yield UserService.createUser(user);
};

module.exports.getAllUsers = function* getAllUsers() {
  this.response.body = yield UserService.getAllUsers();
};
