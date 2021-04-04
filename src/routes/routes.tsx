import React from 'react';
import { Switch } from 'wouter';

import { Home } from '../pages/Home/Home';
import { SoftwareRequirementsForm } from '../pages/SoftwareRequirementsForm/SoftwareRequirementsForm';
import { LoginForm } from '../pages/LoginForm/LoginForm';
import { Login as LoginPage } from '../pages/Login/Login';
import { Route } from './Router';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" isPrivate>
        <Home />
      </Route>
      <Route path="/software-requirements" isPrivate>
        <SoftwareRequirementsForm />
      </Route>
      <Route path="/users/add" isPrivate>
        <LoginForm />
      </Route>
      <Route path="/login" isAuthPage>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
