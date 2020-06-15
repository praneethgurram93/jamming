import React from "react";
import './Playlist.css'
import TrackList from "../trackList/TrackList";

const Playlist = ({playlistName, playlistTracks}) => {
  return (
    <div className="Playlist">
      <input value="New Playlist"/>
      <TrackList tracks={playlistTracks}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
