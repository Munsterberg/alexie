import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './Layout';

const Dashboard = () => <div><h1>Dashboard</h1></div>;
const NotFoundPage = () => <div>Page Not Found</div>;

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/' component={Dashboard} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;