import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import {fetchData} from "./reducer";

class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
        <div className="App">
          {this.props.users.map(user => <p key={user}>{user}</p>)}
        </div>
    );
  }
}

function mapState(state) {
  return {
    users: state.users,
  }
}

function mapDp(dispatch) {
  return {
    fetchData: () => { dispatch(fetchData())}
  };
}

export default connect(mapState, mapDp)(App);
