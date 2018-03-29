import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../containers/Login';
import Main from './Main';

const App = () => (
  <Login />
  // <React.Fragment>
  //   <Switch>
  //     <Route exact path="/" component={Login} />
  //     <Route path="/login" component={Login} />
  //   </Switch>
  // </React.Fragment>
);

export default App;