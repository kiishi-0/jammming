import React from 'react';

import './SearchResults.css';

import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
  render() {
      const results = this.props.searchResults;
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={results} onAdd={this.props.onAdd} isRemoval={false}/>
      </div>
    );
  }
}

export default SearchResults;


// WEBPACK FOOTER //
// ./src/components/SearchResults/SearchResults.js