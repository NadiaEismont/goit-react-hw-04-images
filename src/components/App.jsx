import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    image: null,
    alt: null,
    error: null,
    isLoading: false,
    page: 1,
    search: '',
  };

  async componentDidMount() {
    this.setState({ search: '', page: 1 });
  }

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.search !== this.state.search
    ) {
      try {
        this.setState({ isLoading: true });
        const photos = await fetchImages(this.state.search, this.state.page);
        this.setState(prevState => ({
          images: [...prevState.images, ...photos],
        }));
      } catch (error) {
        this.setState({ error: 'Сталась помилка. Перезавантажте сторінку' });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.search.value;
    this.setState({ search: input, page: 1, images: [] });
    form.reset();
  };
  selectImage = (image, alt) => {
    this.setState({ image, alt });
  };
  onClose = () => {
    this.setState({ image: null });
  };
  render() {
    const { isLoading, images, image, alt } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {isLoading && <Loader />}

        {images && !isLoading && (
          <ImageGallery images={images} selectImage={this.selectImage} />
        )}

        {image && !isLoading && (
          <Modal img={image} alt={alt} onClose={this.onClose} />
        )}
        <button type="submit" className="Button" onClick={this.loadMore}>
          Load more
        </button>
      </div>
    );
  }
}
