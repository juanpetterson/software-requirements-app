import React from 'react';
import { Switch } from 'wouter';

import { Home } from '../pages/Home/Home';
import { SoftwareRequirementsForm } from '../pages/SoftwareRequirementsForm/SoftwareRequirementsForm';
import { UserForm } from '../pages/UserForm/UserForm';
import { Login as LoginPage } from '../pages/Login/Login';
import { Route } from './Router';
import { UsersList } from '../pages/UsersList/UsersList';

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
        <UserForm />
      </Route>
      <Route path="/users/:id/edit" isPrivate>
        {params => <UserForm userId={params.id} />}
      </Route>
      <Route path="/users/list" isPrivate>
        <UsersList />
      </Route>
      <Route path="/login" isAuthPage>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
