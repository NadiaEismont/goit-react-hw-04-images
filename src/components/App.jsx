import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from '../api';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
export function App() {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [alt, setAlt] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setError(null);
        setIsLoading(true);
        const photos = await fetchImages(search, page, controller);
        setImages(images => [...images, ...photos]);
      } catch (e) {
        console.log(e);
        setError('Сталась помилка. Перезавантажте сторінку');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [page, search]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const input = form.elements.search.value;
    setSearch(input);
    setPage(1);
    setImages([]);
    form.reset();
  };
  const selectImage = (image, alt) => {
    setImage(image);
    setAlt(alt);
  };
  const onClose = () => {
    setImage(null);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={handleSubmit}></Searchbar>
      {isLoading && <Loader />}

      {images && !isLoading && (
        <ImageGallery images={images} selectImage={selectImage} />
      )}
      {error && <div>{error}</div>}
      {image && !isLoading && <Modal img={image} alt={alt} onClose={onClose} />}
      {images.length !== 0 && !isLoading && <Button onClick={loadMore} />}
    </div>
  );
}
