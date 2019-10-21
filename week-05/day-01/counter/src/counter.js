
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increaseNum, decreaseNum, increaseOne, decreaseOne, resetCounter, setCounter} from './actions/counterActions'

class Counter extends Component {

    state = {
        inCreaserNum: 0,
        deCreaserNum: 0,
        setterNum: 0,
    };

    render() {
        return(
            <div>
                <div>
                    <p>The Increaser</p>
                    <p>{this.props.counter}</p>
                    <button onClick={this.props.increaseOne}>increate</button>
                </div>

                <div>
                    <p>The Decreaser</p>
                    <p>{this.props.counter}</p>
                    <button onClick={this.props.decreaseOne}>decrease</button>
                </div>

                <div>
                    <p>The Number Increaser</p>
                    <p>{this.props.counter}</p>
                    <input onChange={(evt) => this.setState({inCreaserNum: parseInt(evt.target.value)})} />
                    <button onClick={() => this.props.increaseNum(this.state.inCreaserNum)}>increate</button>
                </div>

                <div>
                    <p>The Number Decreaser</p>
                    <p>{this.props.counter}</p>
                    <input onChange={(evt) => this.setState({deCreaserNum: parseInt(evt.target.value)})} />
                    <button onClick={() => this.props.decreaseNum(this.state.deCreaserNum)}>decrease</button>
                </div>

                <div>
                    <p>The Resetter</p>
                    <p>{this.props.counter}</p>
                    <button onClick={this.props.resetCounter}>reset</button>
                </div>

                <div>
                    <p>The Number Resetter</p>
                    <p>{this.props.counter}</p>
                    <input onChange={(evt) => this.setState({setterNum: parseInt(evt.target.value)})} />
                    <button onClick={() => this.props.setCounter(this.state.setterNum)}>reset</button>
                </div>

            </div>
        );
    }
}

function mapState(state) {
    return {
        counter: state.counter,
    }
}

function mapDispatch(dispatch) {
    return {
        increaseNum: num => dispatch(increaseNum(num)),
        decreaseNum: num => dispatch(decreaseNum(num)),
        increaseOne: () => dispatch(increaseOne()),
        decreaseOne: () => dispatch(decreaseOne()),
        resetCounter: () => dispatch(resetCounter()),
        setCounter: num => dispatch(setCounter(num))
    }
}

export default connect(mapState, mapDispatch)(Counter);