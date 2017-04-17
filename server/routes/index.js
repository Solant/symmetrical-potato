const root = require('./root');

module.exports = (router) => {
  router.get('/', root.index);
  router.get('/app', root.appHtml);
};
