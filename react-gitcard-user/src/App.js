import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import UserList from "./components/UserList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Marguelgtz")
      .then(results => {
        console.log("user info:", results.data);

        this.setState({ userData: results.data });
      })

      .catch(err => console.log("Error:", err));

    axios
      .get("https://api.github.com/users/Marguelgtz/followers")
      .then(results => {
        console.log("followers", results.data);

        this.setState({ followers: results.data });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>React Github User-Card</h2>
        </header>
        <div className="user-card">
          <h2>{this.state.userData.name}</h2>
          <img
            src={this.state.userData.avatar_url}
            alt="user avatar"
            width="250"
          />
          <br />
          <a href={this.state.userData.html_url}>{this.state.userData.login}</a>
        </div>
        <h2> Marguel Gutierrez Followers</h2>
        <UserList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
