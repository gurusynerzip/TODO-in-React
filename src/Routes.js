/**
 * Created by nikhila on 9/25/2015.
 */
let React = require('react');
let {
    Router,
    Route,
    DefaultRoute,
    NotFoundRoute,
    Redirect
    } = require('react-router');

let Main = require('./js/container/Main');
let SomePage = require('./js/component/SomePage');

var Routes = (
    <Router>
        <Route path='/' component={Main}>
            <Route path='/some' component={SomePage} />
        </Route>
    </Router>
);

export default Routes;