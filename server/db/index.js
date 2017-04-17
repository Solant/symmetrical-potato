const bluebird = require('bluebird');
const config = require('../../config');
const mongoose = require('mongoose');

mongoose.connect(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.databaseName}`);

mongoose.Promise = bluebird;
