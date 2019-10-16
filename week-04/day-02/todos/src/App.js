import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {

    users = ['guest'];
    themes = {};

    state = {
        user: 'guest',
        theme: 'superman',
        todos: [{ title: 'something', done: false}],
    }

  render() {
    return(
    <div className="App">
    <Router>
    <Switch>
    <Route path='/'>
    <Title text='todos' />
    <Input text='add'></Input>
    </Route>
    </Switch>
    </Router>
    </div>
    );
  }
}

function Title(props) {
    return <div><h1 className='heading'>{props.text}</h1></div>
}

function Input(props) {
    return(
        <div>
        <input /><button>{props.text}</button>
        </div>
    );
}

export default App;
