import { useState } from 'react';
import styles from './Product.module.scss';
import ProductImage from './ProductImage';
import ProductForm from './ProductForm';
import PropTypes from 'prop-types';

const Product = props => {
/*
  const [currentColor, setCurrentColor] = useState(props.colors[0].name);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
*/
const [currentColor, setCurrentColor] = useState(
  props.colors?.[0] || ''
);

const [currentSize, setCurrentSize] = useState(
  props.sizes?.[0]?.name || ''
);

//console.log('Initial currentColor:', currentColor);
//console.log('Initial currentSize:', currentSize);

  const getPrice = () => {
    const sizeObj = props.sizes?.find(size => size.name === currentSize);
    const extra = sizeObj ? sizeObj.additionalPrice : 0;
    return props.basePrice + extra;
  }

  return (
    <article className={styles.product}>
      
        <ProductImage
        name={props.name}
        title={props.title}
        currentColor={currentColor}
      />
        <ProductForm
        sizes={props.sizes}
        colors={props.colors}
        currentSize={currentSize}
        currentColor={currentColor}
        setCurrentSize={setCurrentSize}
        setCurrentColor={setCurrentColor}
        getPrice={getPrice}
        title={props.title}
      />
      
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string),
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      additionalPrice: PropTypes.number,
    })
  ),
  basePrice: PropTypes.number.isRequired,
};

export default Product;