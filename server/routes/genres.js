const Genre = require('../db/GenreModel');

module.exports.addGenre = function* addGenre() {
  const newGenre = new Genre({ name: this.request.body });
  newGenre.save().catch(reason => console.log(reason));
};

module.exports.getGenreList = function* getAllGenres() {
  const a = yield Genre.find({});
  console.log(`${a.length} documents returned`);
};
