import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './CustomRouter';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <Switch>
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
};

export default Routes;
