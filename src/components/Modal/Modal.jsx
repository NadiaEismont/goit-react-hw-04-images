import { Component } from 'react';
import { createPortal } from 'react-dom';
import '../../styles.css';
import PropTypes from 'prop-types';
const portalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { img, alt } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleClick}>
        <div className="Modal">
          {this.props.children}
          <img src="{img}" alt="{alt}" />
        </div>
      </div>,
      portalRoot
    );
  }
}

Modal.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  onClose: PropTypes.func,
};
