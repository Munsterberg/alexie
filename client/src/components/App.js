import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Dashboard = () => <div><h1>Dashboard</h1></div>;
const NotFoundPage = () => <div>Page Not Found</div>;

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/' component={Dashboard} exact={true} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;