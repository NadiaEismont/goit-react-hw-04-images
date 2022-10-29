import React, { Component } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';

// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
    error: null,
  };

  async componentDidMount() {
    try {
      const photos = await fetchImages('');
      this.setState({ images: photos });
    } catch (error) {}
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.search.value;
    try {
      const photos = await fetchImages(input);
      this.setState({ images: photos });
    } catch (error) {}
    form.reset();
  };

  render() {
    // const options = this.state.images.map(image => ({
    //   value: image.id,
    //   largeImageURL: image.largeImageURL,
    //   webformatURL: image.webformatURL,
    // }));
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery images={this.state.images} />
        {/* <Modal /> */}
      </div>
    );
  }
}
