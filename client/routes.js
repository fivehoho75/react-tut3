import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

export default (
    <Switch>
        <Route path="/" component={App}>
            <IndexRoute component={Greetings} />
            <Route path="signup" component={SignupPage} />
        </Route>
    </Switch>
)