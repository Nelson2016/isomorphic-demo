import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../views/admin/App.jsx';
import Index from '../views/admin/Index.jsx';
import Other from '../views/admin/Other.jsx';

const routes = (
    <Route path="/admin" component={App}>
        <IndexRoute component={Index}/>
        <Route path="other" component={Other}/>
    </Route>
);

export default routes;