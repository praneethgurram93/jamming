import React from "react";
import './SearchResults.css';
import TrackList from "../trackList/TrackList";

const SearchResults = ({searchResults, onAdd, onRemove}) => {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} onAdd={onAdd} onRemove={onRemove} isRemoval={false}/>
    </div>
  );
};

export default SearchResults;
