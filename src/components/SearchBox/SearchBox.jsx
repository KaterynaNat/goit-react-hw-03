import PropTypes from 'prop-types';
import styles from './SearchBox.module.css';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts"
        className={styles.input}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;