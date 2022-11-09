import PropTypes from 'prop-types';
const ImageGalleryItem = ({
  largeImageURL,
  webformatURL,
  value,
  selectImage,
  alt,
}) => (
  <li
    className="ImageGalleryItem"
    key={value}
    onClick={() => selectImage(largeImageURL, value)}
  >
    <img src={webformatURL} className="ImageGalleryItem-image" alt={alt} />
  </li>
);

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  value: PropTypes.number,
  selectImage: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
