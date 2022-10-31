import '../../styles.css';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, selectImage }) => (
  <>
    <ul className="ImageGallery">
      {images.map(({ largeImageURL, webformatURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          webformatURL={webformatURL}
          selectImage={selectImage}
          alt={tags}
        />
      ))}
    </ul>
  </>
);

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  selectImage: PropTypes.func.isRequired,
};

export default ImageGallery;
