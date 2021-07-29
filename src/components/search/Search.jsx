import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="search">Search:</label>
    <input
      id="search"
      type="search"
      name="search"
      placeholder="What information would you like?"
      value={search}
      onChange={onChange}
    />
    <button>Submit</button>  
  </form>
);

Search.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Search;
