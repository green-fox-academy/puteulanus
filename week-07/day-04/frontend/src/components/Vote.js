import React,{ Component } from 'react';

class Vote extends Component {

    render() {

        const {up, down, num} = this.props;

        return(
            <div>
                <div>
                    <button onClick={up}>up</button>
                </div>

                <div>{num}</div>

                <div>
                    <button onClick={down}>down</button>
                </div>
            </div>
        );
    }
}

export default Vote;