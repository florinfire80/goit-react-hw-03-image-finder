import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import searchPixabayImages from './pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import './styles.css';

export const App = () => {
  const [searchResults, setSearchResults] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [searchKey, setSearchKey] = useState('');

  const handleSearchSubmit = (value, page) => {
    setLoading(true);

    const keyChanged = value !== searchKey;

    setSearchValue(value);
    setSearchKey(value);

    if (keyChanged) {
      setSearchResults([]);
      setPage(1);
    }

    searchPixabayImages(value, page)
      .then(response => {
        setSearchResults(prevResults => [
          ...(keyChanged ? [] : prevResults),
          ...response.data.hits,
        ]);
      })
      .catch(error => {
        console.error('Pixabay API error:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    handleSearchSubmit(searchValue, nextPage);
    setPage(nextPage);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSearchSubmit} />
      <ImageGallery images={searchResults} />
      {loading && <Loader />}
      <Button onClick={handleLoadMore} isVisible={searchResults.length > 0} />
    </div>
  );
};
