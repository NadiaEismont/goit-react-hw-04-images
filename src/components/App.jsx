import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        '/?q=cat&page=1&key=25251532-72426a9e0e55162032e249781&image_type=photo&orientation=horizontal&per_page=12'
      );
      console.log(response);
      const photos = response.data.hits;
      this.setState({ images: photos });
    } catch (error) {}
  }

  render() {
    const options = this.state.images.map(image => ({
      value: image.id,
      largeImageURL: image.largeImageURL,
      webformatURL: image.webformatURL,
    }));
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
        <Searchbar onSubmit></Searchbar>
        <ImageGallery />
        {/* <Modal /> */}
      </div>
    );
  }
}
