
import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

class GalleryChoose extends Component {

    chooseStyle = {
        //border: 'solid 3px red',
    };

    handleClick = (id) => {
        this.props.controller.chooseId(id); //there
    };

    render() {
        return(
            <View>
                {this.props.imageData.map(image => {
                    return <TouchableOpacity onPress={()=>this.handleClick(image.id)}>
                        <Image style={{width: 50, height: 50}} source={{uri:image.thumb}} />
                        </TouchableOpacity>
                })}
            </View>
        );
    }
}

export default GalleryChoose;