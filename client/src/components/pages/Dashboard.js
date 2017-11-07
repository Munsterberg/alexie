import React from 'react';
import { connect } from 'react-redux';
import { object, func } from 'prop-types';

import { fetchSummoner } from '../../actions/index';
import SearchForm from '../SearchForm';

class Dashboard extends React.Component {
  static propTypes = {
    fetchSummoner: func,
    history: object
  }

  _fetchSummoner = (summonerName) => {
    this.props.fetchSummoner(summonerName);
    this.props.history.push('/summoner');
  }

  render() {
    return (
      <div className="container">
        <h1>Search for a Summoner</h1>
        <SearchForm onSubmit={this._fetchSummoner} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSummoner: (summonerName) => dispatch(fetchSummoner(summonerName))
  };
};

export default connect(null, mapDispatchToProps)(Dashboard);
