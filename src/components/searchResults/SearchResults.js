import React from "react";
import './SearchResults.css';
import TrackList from "../trackList/TrackList";

const SearchResults = ({searchResults}) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults}/>
    </div>
  );
};

export default SearchResults;
