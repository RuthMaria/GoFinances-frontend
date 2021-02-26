import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';
import { CreateTransactionProvider } from '../context/CreateTransactionContext';

const Routes: React.FC = () => (
  <Switch>
    <CreateTransactionProvider>
      <Route path="/" exact component={Dashboard} />
      <Route path="/import" component={Import} />
    </CreateTransactionProvider>
  </Switch>
);

export default Routes;
