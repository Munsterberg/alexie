import React from 'react';

class Dashboard extends React.Component {
  state = {
    summonerName: ''
  }

  _onInputChange = (e) => {
    const element = e.target;
    const stateObj = {};

    stateObj[element.name] = element.value;
    this.setState(() => stateObj);
  }

  render() {
    const { summonerName } = this.state;
    return (
      <div className="container">
        <h1>Search for a Summoner</h1>
        <div className="row">
          <form className="col s12">
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

export default Dashboard;
