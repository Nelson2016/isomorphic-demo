import React from 'react'
import ReactDom from 'react-dom';
import {Router, match, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import routes from "../router/client-routes";
import store from './store/store';


match({routes, history: browserHistory}, (error, redirectLocation, renderProps) => {
    ReactDom.render(
        <Provider store={store}>
            <Router {...renderProps}/>
        </Provider>,
        document.getElementById('root')
    )
})
