import React, { Component } from 'react';

class UserReg extends Component {

    state = {
        username: '',
        email: '',
        password: ''
    };

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value});
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        if(this.isValid()) {
            console.log(JSON.stringify(this.state));
        }
    };

    isValid() {
        if (this.state.username.length === 0 ) {return false}
        if (! this.state.email.includes('@')) {return false}
        if (this.state.password.length < 8) {return false}
        return true;
    }

    render() {
        return(
            <>
                <h1>User</h1>
            <form>
                <input name='username'
                       onChange={this.handleChange}
                       value={this.state.username}
                       placeholder='username'
                       type="text"/>

                <input name='email'
                       onChange={this.handleChange}
                       value={this.state.email}
                       placeholder='email'
                       type="email"/>

                <input name='password'
                       onChange={this.handleChange}
                       value={this.state.password}
                       placeholder='password'
                       type="password"/>

                <button onClick={this.handleSubmit}>submit</button>
            </form>
                </>
        );
    }
}

export default UserReg;