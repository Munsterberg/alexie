import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import * as actions from '../actions';

import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import MovieList from './pages/MovieList';

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
            <Route path='/movies' component={MovieList} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
};

export default connect(null, actions)(App);
