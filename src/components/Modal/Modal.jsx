import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
const portalRoot = document.querySelector('#modal-root');

export default function Modal(img, alt, onClose) {
  const onKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

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
