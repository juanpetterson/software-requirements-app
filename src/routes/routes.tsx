import React from 'react';
import { Switch } from 'wouter';

import { Home } from '../pages/Home/Home';
import { RequirementForm } from '../pages/RequirementForm/RequirementForm';
import { ProjectForm } from '../pages/ProjectForm/ProjectForm';
import { UserForm } from '../pages/UserForm/UserForm';
import { Login as LoginPage } from '../pages/Login/Login';
import { Route } from './Router';
import { UsersList } from '../pages/UsersList/UsersList';
import { RequirementList } from '../pages/RequirementList/RequirementList';

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
      <Route path="/project" isPrivate>
        <ProjectForm />
      </Route>
      <Route path="/project/:id/edit" isPrivate>
        {params => <ProjectForm projectId={params.projectId} />}
      </Route>
      <Route path="/project/:projectId/requirement" isPrivate>
        {params => <RequirementList projectId={params.projectId} />}
      </Route>
      <Route path="/project/:projectId/requirement/:id" isPrivate>
        {params => (
          <RequirementForm
            projectId={params.projectId}
            requirementId={params.id}
          />
        )}
      </Route>
      <Route path="/login" isAuthPage>
        <LoginPage />
      </Route>
    </Switch>
  );
};

export default Routes;
