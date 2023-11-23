// Modal.jsx

import React, { Component } from 'react';
import basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  openModal = () => {
    this.setState({ isOpen: true });
    this.createModal();
  };

  closeModal = () => {
    this.setState({ isOpen: false });
    this.destroyModal();
  };

  createModal = () => {
    const { largeImageURL, altText } = this.props;

    this.instance = basicLightbox.create(`
      <div class="overlay" onClick="${this.closeModal}">
        <div class="modal">
          <img src="${largeImageURL}" alt="${altText}" />
        </div>
      </div>
    `);

    this.instance.show();
  };

  destroyModal = () => {
    if (this.instance) {
      this.instance.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    return null;
  }
}

export default CustomModal;

// ================================
// class CustomModal extends Component {
//   componentDidMount() {
//     this.initializeModal();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.isOpen !== this.props.isOpen) {
//       this.initializeModal();
//     }
//   }

//   componentWillUnmount() {
//     this.closeModal();
//   }

//   initializeModal() {
//     const { isOpen, onRequestClose, largeImageURL, altText } = this.props;

//     if (isOpen) {
//       this.instance = basicLightbox.create(`
//         <div class="overlay">
//           <div class="modal">
//             <img src="${largeImageURL}" alt="${altText}" />
//           </div>
//         </div>
//       `);

//       this.instance.show();

//       this.handleKeyDown = e => {
//         if (e.key === 'Escape') {
//           this.closeModal();
//           onRequestClose();
//         }
//       };

//       window.addEventListener('keydown', this.handleKeyDown);
//     }
//   }

//   closeModal() {
//     if (this.instance) {
//       window.removeEventListener('keydown', this.handleKeyDown);
//       this.instance.close();
//     }
//   }

//   render() {
//     return null;
//   }
// }

// export default CustomModal;

// ================================
// import { useEffect } from 'react';
// import basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// // import styles from './Modal.module.css';

// const CustomModal = ({
//   isOpen,
//   onRequestClose,
//   webformatURL,
//   largeImageURL,
//   altText,
// }) => {
//   useEffect(() => {
//     console.log('useEffect called with isOpen:', isOpen);
//     if (isOpen) {
//       const instance = basicLightbox.create(`
//         <div class="overlay">
//           <div class="modal">
//             <img src="${largeImageURL}" alt="${altText}" />
//           </div>
//         </div>
//       `);

//       instance.show();

//       const handleKeyDown = e => {
//         if (e.key === 'Escape') {
//           instance.close();
//           onRequestClose();
//         }
//       };

//       window.addEventListener('keydown', handleKeyDown);

//       return () => {
//         window.removeEventListener('keydown', handleKeyDown);
//         instance.close();
//       };
//     }
//   }, [isOpen, onRequestClose, webformatURL, largeImageURL, altText]);

//   return null;
// };

// export default CustomModal;
