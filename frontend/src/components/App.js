import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Test from './Test';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={HomePage} />
                <Route path="/test" component={Test} />
            </div>
        );
    };
}

export default App;