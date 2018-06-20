import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import WordBookPage from './pages/WordBookPage';
import AuthPage from './pages/AuthPage';

import Test from './Test';
import WordBookDetailPage from './pages/WordBookDeetailPage/WordBookDetailPage';

class App extends Component {
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={AuthPage} />
                    <Route path="/register" component={AuthPage} />
                    <Route path="/book/:bookIdx" component={WordBookDetailPage} />
                    <Route path="/book" component={WordBookPage} />
                    <Route path="/test" component={Test} />
                </Switch>
            </div>
        );
    };
}

export default App;