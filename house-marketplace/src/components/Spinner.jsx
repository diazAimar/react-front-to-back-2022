import React, { Component } from 'react';

export default class Spinner extends Component {
  render() {
    return (
      <div className="loadingSpinnerContainer">
        <div className="loadingSpinner"></div>
      </div>
    );
  }
}
