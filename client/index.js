import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRedirect } from 'react-router-dom';
import routes from './routes';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';

render(
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/signup" component={SignupPage} />
        </div>
    </Router>, document.getElementById('app'));