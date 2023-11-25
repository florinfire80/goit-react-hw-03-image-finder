import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import searchPixabayImages from './pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import './styles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      loading: false,
      page: 1,
      searchValue: '',
      searchKey: '',
    };
  }

  handleSearchSubmit = (value, page) => {
    this.setState({ loading: true });

    const { searchKey } = this.state;
    const keyChanged = value !== searchKey;

    this.setState({
      searchValue: value,
      searchKey: value,
    });

    if (keyChanged) {
      this.setState({
        searchResults: [],
        page: 1,
      });
    }

    searchPixabayImages(value, page)
      .then(response => {
        this.setState(prevState => ({
          searchResults: keyChanged
            ? response.data.hits
            : [...prevState.searchResults, ...response.data.hits],
        }));
      })
      .catch(error => {
        console.error('Pixabay API error:', error);
        toast.error(
          error.message || 'An error occurred while fetching images.'
        );
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  handleLoadMore = () => {
    const { page, searchValue } = this.state;
    const nextPage = page + 1;
    this.handleSearchSubmit(searchValue, nextPage);
    this.setState({ page: nextPage });
  };

  render() {
    const { searchResults, loading } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={searchResults} />
        {loading && <Loader />}
        <Button
          onClick={this.handleLoadMore}
          isVisible={searchResults.length > 0}
        />
        <ToastContainer />
      </div>
    );
  }
}

export default App;
