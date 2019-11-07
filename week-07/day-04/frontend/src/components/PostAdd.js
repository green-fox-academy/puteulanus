import React, { Component } from 'react';
import {createMethods} from "../callbackLinker";
import { withRouter } from 'react-router-dom';

class PostAdd extends Component {

    state = {
        title: '',
        url: '',
        text: '',
    };

    handleValueChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    };

    handleShowError = (str) => {
        this.setState({text: str});
        setTimeout(() => {this.setState({text: ''})}, 3000);
    };

    handleGoPath = (path) => {
        this.props.history.push(path);
    };

    render() {

        const {submit, linker} = this.props;
        const {title, url} = this.state;

        const methods = createMethods();
        methods.register('goPath').to(this.handleGoPath);
        methods.register('showError').to(this.handleShowError);

        return <div>
            <div>Title</div>
            <div><input value={this.state.title} name='title' onChange={this.handleValueChange} /></div>
            <div>URL</div>
            <div><input value={this.state.url} name='url' onChange={this.handleValueChange} /></div>
            <div><button onClick={() => {submit(title, url, methods.link(linker))}}>Submit</button></div>
            <p>{this.state.text}</p>
        </div>

    }
}

export default withRouter(PostAdd);