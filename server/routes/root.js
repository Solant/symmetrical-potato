const path = require('path');
const readFileThunk = require('../utils').readFileThunk;

module.exports.appHtml = function* appHtml() {
  const htmlPath = path.resolve(__dirname, '../../public', 'app.html');
  this.body = yield readFileThunk(htmlPath);
};

module.exports.index = function* index() {
  this.redirect('/app');
};
