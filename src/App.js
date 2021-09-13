import { Component } from 'react';
import './App.css';

import { Searchbar } from './Components/Searchbar/Searchbar';
import { fetchImages } from './Components/Api/Api.js';
import { ImageGalery } from './Components/ImageGallery/ImageGallery';
// import Loader from './Components/Loader/Loader';
import { Button } from './Components/Button/Button';
// import Modal from './Components/Modal/Modal';

export class App extends Component {
  state = {
    request: 'bird',
    images: [],
    total: 0,
    page: 1,
  };
  handlerOnSubmit = request => {
    this.setState({
      request: request,
      page: 1,
      images: [],
    });
  };

  showMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  componentDidMount() {
    console.log('~ componentDidMount');
    fetchImages(this.state.request).then(data => {
      this.setState({ images: data.hits, total: data.totalHits });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    console.log('~ componentDidUpdate');
    console.log(this.state);

    console.log(prevState);
    if (prevState.request !== request || prevState.page !== page) {
      fetchImages(request, page).then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
        this.scroll();
      });
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div className="App-header">
        <Searchbar handlerOnSubmit={this.handlerOnSubmit} />
        <ImageGalery images={images} />
        {this.state.total > 12 && <Button showMore={this.showMore} />}
      </div>
    );
  }
}
