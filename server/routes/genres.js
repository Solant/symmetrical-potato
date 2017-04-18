const GenreService = require('../services/GenreService');

module.exports.addGenre = function* addGenre() {
  const name = this.request.body.name;
  this.response.body = yield GenreService.addGenre(name);
};

module.exports.getGenreList = function* getAllGenres() {
  this.response.body = yield GenreService.getAllGenres();
};
