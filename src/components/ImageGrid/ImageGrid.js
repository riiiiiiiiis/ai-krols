import GridItem from './GridItem';
import styles from './ImageGrid.module.css';

const ImageGrid = ({ images, onImageClick }) => {
  return (
    <div className={styles.gridView}>
      {images.map((image) => (
        <GridItem
          key={image.id}
          image={image}
          onClick={onImageClick}
        />
      ))}
    </div>
  );
};

export default ImageGrid;