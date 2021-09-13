import { Component } from 'react';
import './App.css';

import { Searchbar } from './Components/Searchbar/Searchbar';
import { fetchImages } from './Components/Api/Api.js';
import { ImageGalery } from './Components/ImageGallery/ImageGallery';
// import Loader from './Components/Loader/Loader';
// import Button from './Components/Button/Button';
// import Modal from './Components/Modal/Modal';

export class App extends Component {
  state = {
    request: 'bird',
    images: [],
  };
  handlerOnSubmit = (request) => {
    this.setState({
      request: request,
    });
  };

  componentDidMount() {
    fetchImages(this.state.request).then((data) => {
      this.setState({ images: data.hits });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.request !== this.state.request) {
      fetchImages(this.state.request).then((data) => {
        this.setState({ images: data.hits });
      });
    }
  }
  render() {
    return (
      <div className="App-header">
        <Searchbar handlerOnSubmit={this.handlerOnSubmit} />
        <ImageGalery images={this.state.images} />
      </div>
    );
  }
}
