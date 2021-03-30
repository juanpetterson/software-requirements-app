import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import { SoftwareRequirementsForm } from './pages/SoftwareRequirementsForm/SoftwareRequirementsForm';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/software-requirements">
        <SoftwareRequirementsForm />
      </Route>
    </Switch>
  );
};

export default Routes;
