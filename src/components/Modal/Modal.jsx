// Modal.jsx
import { useEffect } from 'react';
import basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styles from './Modal.module.css';

const CustomModal = ({
  isOpen,
  onRequestClose,
  webformatURL,
  largeImageURL,
  altText,
}) => {
  useEffect(() => {
    if (isOpen) {
      const instance = basicLightbox.create(`
        <div class="overlay">
          <div class="modal">
            <img src="${largeImageURL}" alt="${altText}" />
          </div>
        </div>
      `);

      instance.show();

      const handleKeyDown = e => {
        if (e.key === 'Escape') {
          instance.close();
          onRequestClose();
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        instance.close();
      };
    }
  }, [isOpen, onRequestClose, webformatURL, largeImageURL, altText]);

  return null;
};

export default CustomModal;

// =========================
// Modal.jsx
// import { useEffect } from 'react';
// import basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basicLightbox.min.css';
// import styles from './Modal.module.css';

// const CustomModal = ({
//   isOpen,
//   onRequestClose,
//   webformatURL,
//   largeImageURL,
//   altText,
// }) => {
//   useEffect(() => {
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
