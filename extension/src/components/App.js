import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Main from '../containers/Main';

// const App = () => (
//   <Login />
//   // <React.Fragment>
//   //   <Switch>
//   //     <Route exact path="/" component={Login} />
//   //     <Route path="/login" component={Login} />
//   //   </Switch>
//   // </React.Fragment>
// );

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      if (!localStorage.token) {
        return(<Login />)
      } else {
        return(<Main />)
      }
  }
}

export default App;