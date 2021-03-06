const root = require('./root');
const genres = require('./genres');
const users = require('./user');
const authors = require('./authors');
const books = require('./books');

module.exports = (router) => {
  router.get('/', root.index);
  router.get('/app', root.appHtml);
  router.post('/api/genre/add', genres.addGenre);
  router.get('/api/genre/list', genres.getGenreList);
  router.post('/api/user/add', users.createUser);
  router.get('/api/user/list', users.getAllUsers);
  router.post('/api/author/add', authors.addAuthor);
  router.get('/api/author/list', authors.getAuthorList);
  router.get('/api/book/all', books.getAllBooks);
  router.post('/api/book/add', books.createBook);
  router.get('/api/book/randomize', books.randomize);
  router.get('/api/book/list/:pageNumber/:pageSize', books.getSomeBooks);
  router.get('/api/book/info', books.getBooksInfo);
  router.del('/api/book/:id', books.deleteBook);
};
