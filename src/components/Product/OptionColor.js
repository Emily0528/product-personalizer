import styles from './Product.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionColor = ({ colors, currentColor, setCurrentColor }) => {
  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {colors?.map(color => (
          <li key={color}>
            <button
              type="button"
              className={clsx(
                styles[`color${color[0].toUpperCase() + color.slice(1)}`],
                color === currentColor && styles.active
              )}
              onClick={() => setCurrentColor(color)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default OptionColor;