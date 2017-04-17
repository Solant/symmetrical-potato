/* eslint-disable no-console */
const config = require('../config');

require('./db/index');
require('./db/schema');

const Koa = require('koa');
const koaConfig = require('./config/koa');

const app = new Koa();
app.proxy = true;

koaConfig(app);

const port = config.server.port;

app.listen(port, () => {
  console.log(`Static server listening on port:${port} in ${process.env.NODE_ENV} mode`);
});

/* eslint-enable no-console */
