import React from 'react';
import './App.css';
import Playlist from "../playlist/Playlist";
import SearchBar from "../searchBar/SearchBar";
import SearchResults from "../searchResults/SearchResults";

function App() {
  return (
   <div>
     <h1 className="App-title">
       Ja
       <span className="highlight">
         mmm
       </span>
       ing
     </h1>
     <div className="App">
      <SearchBar />
      <div className="App-playlist">
        <SearchResults />
        <Playlist />
      </div>
     </div>
   </div>
  );
}

export default App;
