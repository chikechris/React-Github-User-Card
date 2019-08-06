import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import UserList from "./components/UserList";

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
        console.log("user info:", results.data);

        this.setState({ userData: [results.data] });
      })

      .catch(err => console.log("Error", err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Github User-Card</h2>
        </header>
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
