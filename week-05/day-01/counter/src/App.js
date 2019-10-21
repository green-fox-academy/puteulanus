import React, {Component} from 'react';
import './App.css';
import Counter from "./Counter";
import Tags from "./Tags";

class App extends Component {

    render() {
        return (
            <div className="App">
                <Counter />
                <Tags />
            </div>
        );
    }
}

export default App;
