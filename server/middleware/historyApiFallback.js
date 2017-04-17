function * historyApiFallback(next) {
  const isApp = this.url.indexOf('/app') === 0;

  if (isApp && this.url.indexOf('.') === -1) {
    this.url = '/app.html';
  }

  yield next;
}

module.exports = historyApiFallback;
