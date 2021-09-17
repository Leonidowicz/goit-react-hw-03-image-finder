import { Component } from 'react';
import './App.css';
import { Searchbar } from './Components/Searchbar/Searchbar';
import { fetchImages } from './Components/Api/Api.js';
import { ImageGalery } from './Components/ImageGallery/ImageGallery';
import { Spinner } from './Components/Loader/Loader';
import { Button } from './Components/Button/Button';
import { Modal } from './Components/Modal/Modal';

export class App extends Component {
  state = {
    request: 'bird',
    images: [],
    total: 0,
    page: 1,
    selectedImage: null,
    alt: null,
  };
  handlerOnSubmit = request => {
    this.setState({
      request: request,
      page: 1,
      images: [],
    });
  };
  handlerOnClick = (link, tags) => {
    this.setState({ selectedImage: link, alt: tags });
  };
  handlerOnClosedModal = e => {
    if (e.target.getAttribute('class') === 'Overlay' || e.keyCode === 27) {
      this.setState({ selectedImage: null, alt: null });
    }
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
    // console.log('~ componentDidMount');
    fetchImages(this.state.request).then(data => {
      this.setState({ images: data.hits, total: data.totalHits });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;
    // console.log('~ componentDidUpdate');

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
    const { images, selectedImage, alt } = this.state;
    return (
      <div className="App-header">
        {this.state.selectedImage && (
          <Modal img={selectedImage} alt={alt} cl={this.handlerOnClosedModal} />
        )}

        <Searchbar handlerOnSubmit={this.handlerOnSubmit} />
        {this.state.images.length === 0 && <Spinner />}

        <ImageGalery
          images={images}
          handlerOnClick={this.handlerOnClick}
          clMod={this.handlerOnClosedModal}
        />
        {this.state.total > 12 && <Button showMore={this.showMore} />}
      </div>
    );
  }
}
