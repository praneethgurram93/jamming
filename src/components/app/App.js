import React, { useState } from 'react';
import './App.css';
import Playlist from '../playlist/Playlist';
import SearchBar from '../searchBar/SearchBar';
import SearchResults from '../searchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  /*
      Adds track to playlist
   */
  const addTrack = (track) => {
    // check if track is already in the playlist
    const trackExists = playlistTracks.filter(
      (playlistItem) => playlistItem.id === track.id
    );

    // trackExists.length would be zero if track is unique
    if (!trackExists.length) {
      const currentPlaylistTracks = playlistTracks;
      currentPlaylistTracks.push(track);
      setPlaylistTracks(currentPlaylistTracks);
    }
  };

  /*
      Removes track from playlist
   */
  const removeTrack = (track) => {
    // filter the playlist to get tracks other than the current track
    const uniqueTracks = playlistTracks.filter(
      (playlistItem) => playlistItem.id !== track.id
    );
    setPlaylistTracks(uniqueTracks);
  };

  const updatePlaylistName = (event) => setPlaylistName(event.target.value);

  return (
    <div>
      <h1 className="App-title">
        Ja
        <span className="highlight">mmm</span>
        ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
            onRemove={removeTrack}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
