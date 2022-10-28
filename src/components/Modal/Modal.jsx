import { Component } from 'react';
import { createPortal } from 'react-dom';
const portalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {}
  componentDidUpdate() {}

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          {this.props.children}
          <img src="" alt="" />
        </div>
      </div>,
      portalRoot
    );
  }
}
