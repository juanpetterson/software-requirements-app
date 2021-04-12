import React from 'react';
import { Switch } from 'wouter';

import { Home } from '../pages/Home/Home';
import { RequirementForm } from '../pages/RequirementForm/RequirementForm';
import { ProjectForm } from '../pages/ProjectForm/ProjectForm';
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
      <Route path="/user/add" isPrivate>
        <UserForm />
      </Route>
      <Route path="/user/:id/edit" isPrivate>
        {params => <UserForm userId={params.id} />}
      </Route>
      <Route path="/user/list" isPrivate>
        <UsersList />
      </Route>
      <Route path="/requirement" isPrivate>
        <RequirementForm />
      </Route>
      <Route path="/project" isPrivate>
        <ProjectForm />
      </Route>
      <Route path="/project/:id/edit" isPrivate>
        <ProjectForm />
      </Route>
      <Route path="/login" isAuthPage>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
