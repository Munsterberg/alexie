import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';

import { fetchSummoner } from '../../actions/index';

class Dashboard extends React.Component {
  state = {
    summonerName: ''
  }

  static propTypes = {
    fetchSummoner: func
  }

  _onInputChange = (e) => {
    const element = e.target;
    const stateObj = {};

    stateObj[element.name] = element.value;
    this.setState(() => stateObj);
  }

  _onSubmit = (e) => {
    e.preventDefault();

    this.props.fetchSummoner(this.state.summonerName);
    console.log('submitted');
  }

  render() {
    const { summonerName } = this.state;
    return (
      <div className="container">
        <h1>Search for a Summoner</h1>
        <div className="row">
          <form className="col s12" onSubmit={this._onSubmit}>
            <input
              type="text"
              className="validate"
              placeholder="Munsterberg"
              value={summonerName}
              onChange={this._onInputChange}
              name="summonerName"
              id="summonerName"
            />
            <button className="waves-effect waves-light btn">Search</button>
          </form>
        </div>
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
