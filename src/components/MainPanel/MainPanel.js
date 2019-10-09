import React from 'react';

import "./MainPanel.css";

export default class MainPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPanel: "Select a Class"
    }
  }

  render() {
    return (
      <div className="main">
        <h1> {this.state.mainPanel} </h1>
      </div>
    );
  }
}
