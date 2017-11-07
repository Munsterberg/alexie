import React from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';

Summoner.propTypes = {
  summoner: object
};

function Summoner(props) {
  const { summoner } = props;
  if (!summoner) {
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
    </div>
  );
}

const mapStateToProps = ({ summoner }) => {
  return { summoner };
};

export default connect(mapStateToProps)(Summoner);
