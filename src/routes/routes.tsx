import React from 'react';
import { Switch } from 'wouter';

import { Home } from '../pages/Home/Home';
import { RequirementForm } from '../pages/RequirementForm/RequirementForm';
import { ProjectForm } from '../pages/ProjectForm/ProjectForm';
import { UserForm } from '../pages/UserForm/UserForm';
import { Login as LoginPage } from '../pages/Login/Login';
import { Route } from './Router';
import { UserList } from '../pages/UserList/UserList';
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
        <UserList />
      </Route>
      <Route path="/project" isPrivate>
        <ProjectForm />
      </Route>
      <Route path="/project/:projectId/edit" isPrivate>
        {params => <ProjectForm projectId={params.projectId} />}
      </Route>
      <Route path="/project/:projectId/requirement/list" isPrivate>
        {params => <RequirementList projectId={params.projectId} />}
      </Route>
      <Route path="/project/:projectId/requirement/add" isPrivate>
        {params => <RequirementForm projectId={params.projectId} />}
      </Route>
      <Route
        path="/project/:projectId/requirement/:requirementId/edit"
        isPrivate
      >
        {params => (
          <RequirementForm
            projectId={params.projectId}
            requirementId={params.requirementId}
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
