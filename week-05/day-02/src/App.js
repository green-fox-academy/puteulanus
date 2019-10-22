import React from 'react';
import './App.css';
import EventReg from "./components/EventReg";
import UserReg from "./components/UserReg";
import Pizza from "./components/Pizza";

function App() {
  return (
    <div className="App">
      <EventReg />
      <UserReg />
      <Pizza />
    </div>
  );
}

export default App;
