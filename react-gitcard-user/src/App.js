import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React GitCard</h2>
        </header>
      </div>
    );
  }
}

export default App;
