import React from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import axios from 'axios';

class Summoner extends React.Component {
  state = {
    recentMatches: []
  }

  static propTypes = {
    summoner: object
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.summoner) {
      this._fetchRecentMatches(nextProps.summoner.accountId);
    }
  }

  _fetchRecentMatches = async(accountId) => {
    const url = `/api/recent-matches?accountId=${accountId}`;
    const res = await axios.get(url);
    this.setState(() => ({ recentMatches: res.data.matches }));
  }

  _renderMatches = () => {
    this.state.recentMatches.map(match => {
      return <div>{match.lane}</div>;
    });
  }

  render() {
    const { summoner } = this.props;
    const { recentMatches } = this.state;
    if (!summoner || recentMatches.length === 0) {
      return (
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <h1>{ summoner.name }</h1>
        { this._renderMatches() }
      </div>
    );
  }
}

const mapStateToProps = ({ summoner }) => {
  return { summoner };
};

export default connect(mapStateToProps)(Summoner);
