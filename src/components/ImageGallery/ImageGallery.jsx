// ImageGallery.jsx

import React from 'react';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={styles['imageGallery']}>
      {images.map(image => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={`Pixabay Image ${image.id}`} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
