import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Test from './Test';

class App extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Route exact path="/" component={HomePage} />
                <Route path="/auth" component={AuthPage} />
                <Route path="/test" component={Test} />
            </div>
        );
    };
}

export default App;