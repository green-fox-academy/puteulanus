
import React, {Component} from 'react';
import {View, Button, Image, Text} from 'react-native';

class GalleryView extends Component {

    containerStyle = {
        display: 'flex',
    };

    render() {
        return(
            <View style={this.containerStyle}>
                <Image source={{uri:this.props.imageData.url}} style={{width: 300, height: 300}} />
                <Text>{this.props.imageData.title}</Text>
                <Text>{this.props.imageData.desc}</Text>
                <Button title='left' onPress={this.props.controller.lastPage} />
                <Button title='right' onPress={this.props.controller.nextPage} />
            </View>
        );
    }
}

export default GalleryView;