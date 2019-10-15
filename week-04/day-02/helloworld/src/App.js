import React from 'react';
import {BrowserRouter as Router, Switch, Link, Route, useParams} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/'>Hello World</Link>
        <Link to='/error'>Error</Link>
        <Link to='/error/403'>Error Code</Link>
        <Link to='/meow'>Not implemented yet</Link>
        <Switch>
          <Route exact path='/'>
            <HelloWorld />
          </Route>

          <Route exact path='/error'>
            <Error />
          </Route>

          <Route path='/error/:errorcode' children={<ErrorCode />} />

          <Route>
            <NotYet />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

function HelloWorld() {
  return <div>Hello World!</div>;
}

function Error() {
  return <div>Something bad happened.</div>
}

function ErrorCode() {
  let { errorcode } = useParams();

  return <div>Error: {errorcode}</div>;
}

function NotYet() {
  return <div>This page is not implemented yet</div>;
}

export default App;
