import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Main from '../containers/Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: '' };
  }

  componentWillMount = async () => {
    chrome.storage.sync.get(['token'], (value) => {
      if (!value.token) return;
      this.setState({ token: value.token });
    });
  }

  render() {
      if (!this.state.token) {
        return(<Login />)
      } else {
        return(<Main />)
      }
  }
}

export default App;