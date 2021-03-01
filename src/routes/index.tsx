import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';
import CreateTransaction from '../pages/CreateTransaction';
import { DashboardProvider } from '../contexts/DashboardContext';

const Routes: React.FC = () => (
  <Switch>
    <DashboardProvider>
      <Route path="/" exact component={Dashboard} />
      <Route path="/import" component={Import} />
      <Route path="/create-transaction" component={CreateTransaction} />
    </DashboardProvider>
  </Switch>
);

export default Routes;
