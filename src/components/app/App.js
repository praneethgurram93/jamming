import React, {useState} from 'react';
import './App.css';
import Playlist from "../playlist/Playlist";
import SearchBar from "../searchBar/SearchBar";
import SearchResults from "../searchResults/SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

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
        <SearchResults searchResults={searchResults}/>
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
      </div>
     </div>
   </div>
  );
}

export default App;
