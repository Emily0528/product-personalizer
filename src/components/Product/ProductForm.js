import OptionSize from './OptionSize';
import OptionColor from './OptionColor';
import Button from '../Button/Button';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';

const ProductForm = ({
  sizes,
  colors,
  currentSize,
  currentColor,
  setCurrentSize,
  setCurrentColor,
  getPrice,
  title,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Product summary:');
    console.log('Title:', title);
    console.log('Final Price:', getPrice(), '$');
    console.log('Selected Color:', currentColor);
    console.log('Selected Size:', currentSize);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.productForm}>

        <h2 className={styles.name}>{title}</h2>

        <span className={styles.price}>Price: {getPrice()}$</span>

      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />

      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <Button className={styles.button} type="submit">
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductForm;