import { Component } from 'react';
import '../../styles.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, selectImage }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ largeImageURL, webformatURL, id }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          selectImage={selectImage}
        />
      ))}
    </ul>
  </>
);
export default ImageGallery;
