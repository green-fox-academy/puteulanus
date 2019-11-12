import React, {Component} from 'react';
import { StyleSheet, Text, View, InputText } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Gallery from "./components/Gallery";
import CreateObservableObject from "./Observer";
import Images from "./classes/images";

const store = createStore(()=>{});

export default class App extends Component {

  componentWillMount() {
    let add = this.images.add.bind(this.images);
    add('1','miao 1 miao','https://url.cn/5dmXyWH');
    add('2', 'miao 2 miao','https://url.cn/5gmwrwx');
    add('3','miao 3 miao','https://url.cn/5PcoPhw');
    add('4','miao 4 miao','https://url.cn/5RJr8E1');
    add('5','miao 5 miao','https://url.cn/59WUicS');
  }

  images = CreateObservableObject(new Images()).addObserver(this, 'images');

  state = {
    images: this.images,
  };

    render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Gallery imageData={this.images.getAll()} />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
