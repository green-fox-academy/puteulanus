
import React, {Component} from 'react';

class GalleryChoose extends Component {

    chooseStyle = {
        border: 'solid 3px red',
    };

    handleClick = (evt) => {
        this.props.controller.chooseId(evt.target.dataset.imageid);
    };

    render() {
        return(
            <div>
                {this.props.imageData.map(image => {
                    return <img width='50px' height='50px' src={image.thumb} alt=''
                                data-imageid={image.id} key={image.id}
                                onClick={this.handleClick}
                                style={image.id === this.props.chooseId ? this.chooseStyle : null}/>
                })}
            </div>
        );
    }
}

export default GalleryChoose;