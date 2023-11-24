// ImageGalleryItem.js
import React, { useState, useEffect } from 'react';
import styles from './ImageGalleryItem.module.css';
import ImageModal from 'components/Modal/ImageModal';

const ImageGalleryItem = ({ webformatURL, largeImageURL, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    console.log('Starea modalului a fost schimbată:', isOpen);
  }, [isOpen]);

  return (
    <li className={styles['gallery-item']} onClick={handleImageClick}>
      <img
        className={styles['gallery-item-image']}
        src={webformatURL}
        alt={altText}
      />

      {isOpen && (
        <ImageModal
          isOpen={isOpen}
          onRequestClose={handleImageClick}
          largeImageURL={largeImageURL}
          altText={altText}
        />
      )}
    </li>
  );
};

export default ImageGalleryItem;

// ==================================
// import React, { Component } from 'react';
// import CustomModal from '../Modal/Modal';
// import styles from './ImageGalleryItem.module.css';

// class ImageGalleryItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//   }

//   handleImageClick = () => {
//     this.setState(prevState => ({
//       isOpen: !prevState.isOpen,
//     }));
//   };

//   render() {
//     const { webformatURL, largeImageURL, altText } = this.props;

//     return (
//       <li className={styles['gallery-item']} onClick={this.handleImageClick}>
//         <img
//           className={styles['gallery-item-image']}
//           src={webformatURL}
//           alt={altText}
//         />

//         {this.state.isOpen && (
//           <CustomModal
//             isOpen={this.state.isOpen}
//             onRequestClose={this.handleImageClick}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             altText={altText}
//           />
//         )}
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;

// =========================================
// import React, { Component } from 'react';
// import basicLightbox from 'basiclightbox';
// import CustomModal from '../Modal/Modal';
// import styles from './ImageGalleryItem.module.css';

// class ImageGalleryItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modalIsOpen: false,
//     };
//   }

//   handleImageClick = () => {
//     this.setState({ modalIsOpen: true });

//     this.instance = basicLightbox.create(`
//       <div class="overlay">
//         <div class="modal">
//           <img src="${this.props.largeImageURL}" alt="${this.props.altText}" />
//         </div>
//       </div>
//     `);

//     this.instance.show();
//   };

//   handleCloseModal = () => {
//     this.setState({ modalIsOpen: false });
//   };

//   componentWillUnmount() {
//     if (this.instance) {
//       this.instance.close();
//     }
//   }

//   render() {
//     const { webformatURL, largeImageURL, altText } = this.props;
//     const { modalIsOpen } = this.state;

//     return (
//       <li className={styles['gallery-item']}>
//         <img
//           className={styles['gallery-item-image']}
//           src={webformatURL}
//           alt={altText}
//           onClick={this.handleImageClick}
//         />
//         {modalIsOpen && (
//           <CustomModal
//             isOpen={modalIsOpen}
//             onRequestClose={this.handleCloseModal}
//             webformatURL={webformatURL}
//             largeImageURL={largeImageURL}
//             altText={altText}
//           />
//         )}
//       </li>
//     );
//   }
// }

// export default ImageGalleryItem;

// ===========================================
// import React, { useState } from 'react';
// import basicLightbox from 'basiclightbox';
// import CustomModal from '../Modal/Modal';
// import styles from './ImageGalleryItem.module.css';

// const ImageGalleryItem = ({ webformatURL, largeImageURL, altText }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const handleImageClick = () => {
//     setModalIsOpen(true);

//     const instance = basicLightbox.create(`
//       <div class="overlay">
//         <div class="modal">
//           <img src="${largeImageURL}" alt="${altText}" />
//         </div>
//       </div>
//     `);

//     instance.show();
//   };

//   const handleCloseModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <li className={styles['gallery-item']}>
//       <img
//         className={styles['gallery-item-image']}
//         src={webformatURL}
//         alt={altText}
//         onClick={handleImageClick}
//       />
//       {modalIsOpen && ( // Aici verificăm dacă modalIsOpen este true
//         <CustomModal
//           isOpen={modalIsOpen}
//           onRequestClose={handleCloseModal}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           altText={altText}
//         />
//       )}
//     </li>
//   );
// };

// export default ImageGalleryItem;
