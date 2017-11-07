import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import * as actions from '../actions';

import Layout from './Layout';

const Dashboard = () => <div><h1>Dashboard</h1></div>;
const NotFoundPage = () => <div>Page Not Found</div>;

class App extends Component {
  static propTypes = {
    fetchUser: func
  };

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
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
  }
};

export default connect(null, actions)(App);
