import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';

// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
    image: null,
    alt: null,
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    try {
      const photos = await fetchImages('');
      this.setState({ images: photos });
    } catch (error) {
      this.setState({ error: 'Сталась помилка. Перезавантажте сторінку' });
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.search.value;
    try {
      this.setState({ isLoading: true });
      const photos = await fetchImages(input);
      this.setState({ images: photos });
    } catch (error) {
      this.setState({ error: 'Сталась помилка. Перезавантажте сторінку' });
    } finally {
      this.setState({ isLoading: false });
    }
    form.reset();
  };
  selectImage = (image, alt) => {
    this.setState({ image, alt });
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

        {image && !isLoading && <Modal img={image} alt={alt} onClose />}
      </div>
    );
  }
}
