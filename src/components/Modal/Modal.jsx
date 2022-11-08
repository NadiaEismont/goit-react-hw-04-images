import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const portalRoot = document.querySelector('#modal-root');

export default function Modal({ img, alt, onClose }) {
  const handleClick = e => {
    if (e.target === e.currentTarget) {
      console.log(onClose);
      onClose();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className="Overlay" onClick={handleClick}>
      <div className="Modal">
        <img src={img} alt={alt} />
      </div>
    </div>,
    portalRoot
  );
}

Modal.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};
