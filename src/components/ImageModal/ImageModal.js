'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import styles from './ImageModal.module.css';

const ImageModal = ({ image, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Scroll to top when modal opens
      window.scrollTo(0, 0);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) {
    return null;
  }

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleImageClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <div className={styles.singleView} onClick={handleOverlayClick}>
      <div className={styles.imageContainer}>
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={500}
          quality={100}
          onClick={handleImageClick}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default ImageModal;