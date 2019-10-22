import React, { Component } from 'react';

class EventReg extends Component {

    state = {
        firstName: '',
        lastName: '',
        emailAddress: '',
        storedForm: {
            firstName: '',
            lastName: '',
            emailAddress: '',
        }
    };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.setState({storedForm: {...this.state}});
    };

    render() {
        return(
            <div>
                <h1>Event</h1>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name='firstName' value={this.state.firstName} placeholder='first name' />
                    <input onChange={this.handleChange} name='lastName' value={this.state.lastName} placeholder='last name' />
                    <input onChange={this.handleChange} name='emailAddress' value={this.state.emailAddress} placeholder='email' />
                    <button>submit</button>
                </form>

                <ul>
                    <li>{`First Name: ${this.state.storedForm.firstName}`}</li>
                    <li>{`Last Name: ${this.state.storedForm.lastName}`}</li>
                    <li>{`Email: ${this.state.storedForm.emailAddress}`}</li>
                </ul>
            </div>
        );
    }
}

export default EventReg;