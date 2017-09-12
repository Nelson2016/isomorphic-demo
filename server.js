import Koa from 'koa';
import path from 'path';
import React from 'react';
import views from 'koa-views';
import webpack from 'webpack';
import statics from 'koa-static';
import config from './config/config';
import webpackConfig from './webpack/webpack.config';
import router from './router/isomorphic-router';


const rootDir = path.resolve(__dirname, '..');
const compiler = webpack(webpackConfig)
const port = config.server.port;
const app = new Koa();

const webpackDevMiddlewareConfig = {
    quiet: true,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    publicPath: webpackConfig.output.publicPath,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
}

export default function (parameters) {

    app.use(views(path.resolve(rootDir), {map: {html: 'nunjucks'}}));

    app.use(statics('.'));

    app.use(router);


    app.use(require('webpack-dev-middleware')(compiler, webpackDevMiddlewareConfig));
    app.use(require('webpack-hot-middleware')(compiler));

    app.listen(port, function () {
        console.log('服务器运行-端口：' + port);
    });
}