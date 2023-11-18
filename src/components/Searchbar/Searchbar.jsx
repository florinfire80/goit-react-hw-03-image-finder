import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <header className={styles['searchbar']}>
      <form className={styles['searchForm']} onSubmit={handleSubmit}>
        <button type="submit" className={styles['searchForm-button']}>
          <span className={styles['searchForm-button-label']}>Search</span>
        </button>

        <input
          className={styles['searchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
