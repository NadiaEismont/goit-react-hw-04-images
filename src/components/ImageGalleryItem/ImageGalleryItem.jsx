import { Component } from 'react';
import '../../styles.css';
import PropTypes from 'prop-types';
const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  value,
  selectImage,
}) => (
  <li
    className="ImageGalleryItem"
    key={value}
    onClick={() => selectImage(largeImageURL, value)}
  >
    <img src={webformatURL} className="ImageGalleryItem-image" alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
};
export default ImageGalleryItem;
