import React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';
import {Provider} from 'react-redux';
import adminRoutes from './admin-routes';
import clientRoutes from './client-routes';

import clientStore from '../client/store/store';
import adminStore from '../admin/store/store';
import config from "../config/config";

async function router(ctx, next) {

    let matchResult = {},
        scriptTemplate,
        routes,
        store;

    let pathArr = ctx.path.substring(1).split('/');

    if (pathArr[0] === 'admin') {
        routes = adminRoutes;
        store = adminStore;
    } else {
        routes = clientRoutes;
        store = clientStore;
    }

    if (process.env.NODE_ENV === 'development') {
        scriptTemplate = `<script src="${config.client.host}:${config.client.port}/build/server-side.bundle.js"></script>`;
    } else {
        scriptTemplate = `<script src="build/server-side.bundle.js"></script>`;
    }

    match({routes, location: ctx.url}, (error, redirectLocation, renderProps) => {

        matchResult = {error, redirectLocation, renderProps}

    });

    if (matchResult.error) {

        console.log(matchResult.error.message);

    } else if (matchResult.redirectLocation) {

        console.log(matchResult.redirectLocation.pathname + matchResult.redirectLocation.search);

    } else if (matchResult.renderProps) {

        await ctx.render('views/index', {
            content: renderToString(
                <Provider store={store}>
                    <RouterContext {...matchResult.renderProps}/>
                </Provider>
            ),
            script: scriptTemplate,
            state: store.getState()
        })

    } else {

        console.log('Not found');

    }
}

export default router