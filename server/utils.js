const Promise = require('bluebird');
const fs = require('fs');

const readFile = Promise.promisify(fs.readFile);

module.exports.readFileThunk = src => readFile(src, { encoding: 'utf8' });
