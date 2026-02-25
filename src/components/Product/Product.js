import { useState } from 'react';
import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
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

console.log('Initial currentColor:', currentColor);
console.log('Initial currentSize:', currentSize);

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}  />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>
            Price: {props.basePrice}$
          </span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>

            <ul className={styles.choices}>
              {props.sizes?.map(size => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx(size.name === currentSize && styles.active)}
                    onClick={() => setCurrentSize(size.name)} 
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>

          </div>

          {/* KOLORY */}
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>

            <ul className={styles.choices}>
              {props.colors?.map(color => (
              <li key={color}>
                <button
                  type="button"
                  className={clsx(
                    styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
                    color === currentColor && styles.active
                  )}
                  onClick={() => setCurrentColor(color)}
                />
              </li>
              ))}
            </ul>

          </div>
          
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: PropTypes.string,
  title: PropTypes.string,
  colors: PropTypes.array,
  sizes: PropTypes.array,
  basePrice: PropTypes.number,
};

export default Product;