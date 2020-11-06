import React, {Component, useState} from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.relatives = ["Name1", "Name2", "Name3", "Name4"];
  }

  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.relatives.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
