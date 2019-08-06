import React, { Component } from "react";
import { render as renderDOM } from "react-dom";

class App extends Component {
  render() {
    return (
      <h1>Tada!</h1>
    )
  }

}

renderDOM(<App />, document.getElementById('cornerstoneApp'))
