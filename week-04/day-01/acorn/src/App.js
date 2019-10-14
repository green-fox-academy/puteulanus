import React, { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <SimpleGoldenAcornApp />
    </div>
  );
}

class SimpleGoldenAcornApp extends Component {

  state = {
    acorn: 0
  };

  handleIncrement(e) {
    this.setState({acorn: this.state.acorn + 1});
  }

  handleDecrease(e) {
    this.state.acorn > 0 && this.setState({acorn: this.state.acorn - 1});
  }

  render() {
    return (
        <div>
          <button onClick={this.handleIncrement.bind(this)}>Buy one</button>
          <div>{this.state.acorn}</div>
          <button onClick={this.handleDecrease.bind(this)}>Eat one</button>
        </div>
    );
  }
}

export default App;
