import React, {Component} from 'react';
import './App.css';

class App extends Component{

    state = {
        data: [],
    };

    handleInsert = (name) => {
        this.state.data.push([name, (new Date()).getTime()]);
        this.setState({data: this.state.data});
    };

    render() {
        return (
            <div className="App">
                <Com mount={this.handleInsert} />
                <Com2 mount={this.handleInsert} />
                <Table data={this.state.data} />
            </div>
        );
    }
}

class Com extends Component {

    componentDidMount = () => {
        this.props.mount('C1');
    };

    render() {
        return <div>C1</div>;
    }
}

class Com2 extends Component {

    componentDidMount = () => {
        this.props.mount('C2');
    };

    render() {
        return <div>C2</div>;
    }
}

class Table extends Component{

  render() {
    return (
        <div>
        <table>
          <tr><td>Name</td><td>Time</td></tr>
          {this.props.data.map((row) => {
            return <tr><td>{row[0]}</td><td>{row[1]}</td></tr>
          })}
        </table>
        </div>
    );
  }
}



export default App;
