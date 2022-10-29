import { Component } from 'react';
import '../../styles.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => (
  <>
    <ul class="gallery">
      {images.map(({ largeImageURL, webformatURL, id }) => (
        <ImageGalleryItem
          value={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
        />
      ))}
    </ul>
  </>
);
export default ImageGallery;
