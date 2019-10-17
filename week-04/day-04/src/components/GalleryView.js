
import React, {Component} from 'react';

class GalleryView extends Component {

    containerStyle = {
        display: 'flex',
    };

    render() {
        return(
            <div style={this.containerStyle}>
                <button onClick={this.props.controller.lastPage}>left</button>
                <img width='300px' height='300px' src={this.props.imageData.url} alt='' />
                <span>{this.props.imageData.title}</span>
                <span>{this.props.imageData.desc}</span>
                <button onClick={this.props.controller.nextPage}>right</button>
            </div>
        );
    }
}

export default GalleryView;