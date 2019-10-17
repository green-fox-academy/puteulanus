import React, {Component} from 'react';
import CreateObservableObject from "./Observer";
import Images from "./classes/images";
import './App.css';
import Gallery from "./components/Gallery";

class App extends Component {

  images = CreateObservableObject(new Images()).addObserver(this, 'images');

  state = {
    images: this.images,
  };

  componentWillMount() {
    let add = this.images.add.bind(this.images);
    add('1','miao 1 miao','https://url.cn/5dmXyWH');
    add('2', 'miao 2 miao','https://url.cn/5gmwrwx');
    add('3','miao 3 miao','https://url.cn/5PcoPhw');
    add('4','miao 4 miao','https://url.cn/5RJr8E1');
    add('5','miao 5 miao','https://url.cn/59WUicS');
  }

  handleAddImage = (title, describe, url, thumbUrl) => {
      this.images.add(title, describe, url, thumbUrl);
  };

  testAddPic = () => {
      this.handleAddImage('6','miao 6 miao', 'https://url.cn/5dmXyWH');
};

  render() {
    return (
        <div className="App">
          <Gallery imageData={this.images.getAll()} />
          <button onClick={this.testAddPic}>test add pic</button>
        </div>
    );
  }
}

export default App;
