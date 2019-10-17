
import React, {Component} from 'react';
import GalleryView from './GalleryView';
import GalleryChoose from './GalleryChoose';

class Gallery extends Component {

    state = {
      chooseId: '',
    };

    componentWillMount() {
        if(this.props.imageData.length === 0) {return}
        this.setState({chooseId: this.props.imageData[0].id});
    }

    getIndexNum = (id) => {
        let index = -1;
        this.props.imageData.forEach((image, indexNum) => {if(image.id === id){index = indexNum}});
        if (index !== -1) {
            return index;
        }
    };

    handleLastPage = () => {
        if(this.props.imageData.length === 0) {return}
        if(this.props.imageData[0].id !== this.state.chooseId) {
            this.setState({chooseId: this.props.imageData[this.getIndexNum(this.state.chooseId) - 1].id});
        } else {
            this.setState({chooseId: this.props.imageData[this.props.imageData.length - 1].id});
        }
    };

    handleNextPage = () => {
        if(this.props.imageData.length === 0) {return}
        if(this.props.imageData[this.props.imageData.length - 1].id !== this.state.chooseId) {
            this.setState({chooseId: this.props.imageData[this.getIndexNum(this.state.chooseId) + 1].id});
        } else {
            this.setState({chooseId: this.props.imageData[0].id});
        }
    };

    handleSetId = (id) => {
        this.setState({chooseId: id});
    };

    GalleryController = {
        lastPage: this.handleLastPage,
        nextPage: this.handleNextPage,
        chooseId: this.handleSetId,
    };

    render() {
        return(
            <div>
            <GalleryView
                imageData={this.props.imageData.filter(image => image.id === this.state.chooseId)[0]}
                controller={this.GalleryController}
            />
            <GalleryChoose
                imageData={this.props.imageData}
                chooseId={this.state.chooseId}
                controller={this.GalleryController}
            />
            </div>
        );
    }
}

export default Gallery;