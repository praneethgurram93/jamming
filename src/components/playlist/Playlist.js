import React from 'react';
import './Playlist.css';
import TrackList from '../trackList/TrackList';

const Playlist = ({
  playlistName,
  playlistTracks,
  onRemove,
  handleNameChange,
}) => {
  return (
    <div className="Playlist">
      <input value="New Playlist" onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
