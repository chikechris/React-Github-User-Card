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

  componentDidMount() {
    axios
      .get("https://api.github.com/users/dustinmyers")
      .then(results => {
        console.log("user info", results.data);

        this.setState({ userData: [results.data] });
      })

      .catch(err => console.log("did not work", err));
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
