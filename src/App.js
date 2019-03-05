import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { KnightA } from "./0/Knight";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <KnightA weapon={"sword"} />
        </div>
      </div>
    );
  }
}

export default App;
