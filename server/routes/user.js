const User = require('../db/UserModel');

module.exports.registerUser = function* registerUser() {
  const body = this.request.body;
  const user = new User({
    firstName: body.firstName,
    lastName: body.lastName,
    favoriteBooks: body.favoriteBooks,
    cash: body.cash,
  });
  const savedUser = yield user.save();
  console.log(`Created user ${savedUser._doc.firstName} ${savedUser._doc.firstName}`);
};
