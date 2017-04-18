const GenreModel = require('../db/GenreModel');

module.exports = class GenreService {
  static addGenre(name) {
    const genre = new GenreModel({ name });
    return genre.save()
    .then(model => model.toObject())
    .catch(error => ({
      error,
    }));
  }

/**
 * @returns Array of genre names.
 */
  static getAllGenres() {
    return GenreModel.find({}).then((model) => {
      const genres = model.map(arg => arg.name);
      return genres;
    });
  }
};
