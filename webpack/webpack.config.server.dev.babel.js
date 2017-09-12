import { server } from 'universal-webpack/config'
import settings from './universal-webpack-settings'
import configuration from './webpack.config'

import config from '../config/config';

const {host, port} = config.client;
configuration.output.publicPath = `${host}:${port}/${configuration.output.publicPath}`;

export default server(configuration, settings)