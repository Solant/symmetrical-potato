const webpack = require('webpack');
const webpackConfig = require('../../webpack.config');
const webpackDevMiddleware = require('koa-webpack-dev-middleware');
const webpackHotMiddleware = require('koa-webpack-hot-middleware');
const koaRouter = require('koa-router');
const bodyParser = require('koa-body');
const serve = require('koa-static');

const historyApiFallback = require('../middleware/historyApiFallback');

const routeConfig = require('../routes/index');

const env = process.env.NODE_ENV || 'development';
const development = env === 'development';

module.exports = (app) => {
  if (development) {
    app.use(historyApiFallback);

    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
      stats: {
        colors: true,
      },
    }));
    app.use(webpackHotMiddleware(compiler, {
      path: '/__webpack_hmr', heartbeat: 10 * 1000,
    }));
  } else {
    app.use(serve('public'));
  }

  app.use(bodyParser({
    multipart: true,
  }));

  const router = koaRouter();
  routeConfig(router);
  app.use(router.routes());
};
