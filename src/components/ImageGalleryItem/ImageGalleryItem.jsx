// ImageGalleryItem.jsx

import React, { useState, useEffect } from 'react';
import CustomModal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, altText }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  return (
    <li className={styles['gallery-item']}>
      <img
        className={styles['gallery-item-image']}
        src={webformatURL}
        alt={altText}
        onClick={handleImageClick}
      />
      {
        <CustomModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          altText={altText}
        />
      }
    </li>
  );
};

export default ImageGalleryItem;

// ===========================
// import React, { useState } from 'react';
// import basicLightbox from 'basiclightbox';
// import CustomModal from '../Modal/Modal';
// import styles from './ImageGalleryItem.module.css';

// const ImageGalleryItem = ({ webformatURL, largeImageURL, altText }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const handleImageClick = () => {
//     const instance = basicLightbox.create(`
//       <div class="overlay">
//         <div class="modal">
//           <img src="${largeImageURL}" alt="${altText}" />
//         </div>
//       </div>
//     `);

//     instance.show();

//     setModalIsOpen(true);
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
//       {
//         <CustomModal
//           isOpen={modalIsOpen}
//           onRequestClose={handleCloseModal}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           altText={altText}
//         />
//       }
//     </li>
//   );
// };

// export default ImageGalleryItem;
