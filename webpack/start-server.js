const startServer = require('universal-webpack/server');
const settings = require('./universal-webpack-settings');
const configuration = require('./webpack.config');

startServer(configuration, settings);