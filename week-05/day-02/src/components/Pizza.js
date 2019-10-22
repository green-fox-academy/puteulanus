import React, { Component } from 'react';

class Pizza extends Component{

    state = {
        base: 'small',
        cheese: false,
        coriander: false,
        scallion: false,
        cut: 'yes',
        comment: ''
    };

    handleChange = ({target: {type, name, value, checked}}) => {
        if (type === 'checkbox') {
            this.setState({[name]: checked});
        } else {
            this.setState({[name]: value});
        }
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <>
                <h1>Pizza</h1>
            <form onSubmit={this.handleSubmit}>
                Base:
                <select value={this.state.base}
                        name='base'
                        onChange={this.handleChange}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="Large">Large</option>
                </select>

                <br />

                Toppings:
                <input name='cheese' checked={this.state.cheese} onChange={this.handleChange} type="checkbox"/>cheese
                <input name='coriander' checked={this.state.coriander} onChange={this.handleChange} type="checkbox"/>coriander
                <input name='scallion' checked={this.state.scallion} onChange={this.handleChange} type="checkbox"/>scallion

                <br />

                <input name='cut'
                       onChange={this.handleChange}
                       value='yes'
                       type="radio"
                       checked={this.state.cut === 'yes'}/>cut
                <input name='cut'
                       onChange={this.handleChange}
                       value='no'
                       type="radio"
                       checked={this.state.cut === 'no'}/>not cut

                <br />

                Your comments:
                <textarea name='comment' value={this.state.comment} onChange={this.handleChange}>

                </textarea>

                <br />

                <button>submit</button>


            </form>
                </>
        );
    }
}

export default Pizza;