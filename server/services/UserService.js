const UserModel = require('../db/UserModel');

module.exports = class UserService {

  static addUser(userObject) {
    const user = new UserModel(userObject);
    return user.save().then(model => model.toObject());
  }

  static getAllUsers() {
    return UserModel.find({}).then((model) => {
      const users = model.map(arg => arg.toObject());
      return users;
    });
  }
};
