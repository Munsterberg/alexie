import React from 'react';
import { func } from 'prop-types';

class SearchForm extends React.Component {
  state = {
    summonerName: ''
  }

  static propTypes = {
    onSubmit: func
  }

  _onInputChange = (e) => {
    const element = e.target;
    const stateObj = {};

    stateObj[element.name] = element.value;
    this.setState(() => stateObj);
  }

  _onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.summonerName);
  }

  render() {
    const { summonerName } = this.state;
    return (
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
    );
  }
}

export default SearchForm;
