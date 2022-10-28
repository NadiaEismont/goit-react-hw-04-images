import React, { Component } from 'react';
import axios from 'axios';
import Modal from './Modal/Modal';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12';
axios.defaults.headers.common['x-api-key'] = process.env.REACT_APP_API_KEY;
export class App extends Component {
  state = {};
  async componentDidMount() {
    try {
      const response = await axios.get('/photo');
    } catch (error) {}
  }
  render() {
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
        <Modal />
      </div>
    );
  }
}
