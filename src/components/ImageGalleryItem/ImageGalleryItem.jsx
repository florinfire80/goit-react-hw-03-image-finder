// ImageGalleryItem.jsx

import React, { useState } from 'react';
import basicLightbox from 'basiclightbox';
import CustomModal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, altText }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageClick = () => {
    const instance = basicLightbox.create(`
      <div class="overlay">
        <div class="modal">
          <img src="${largeImageURL}" alt="${altText}" />
        </div>
      </div>
    `);

    instance.show();

    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
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
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          altText={altText}
        />
      }
    </li>
  );
};

export default ImageGalleryItem;
