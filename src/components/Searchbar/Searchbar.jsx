import '../../styles.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => (
  <>
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  </>
);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
