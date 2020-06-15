import React from "react";
import './TrackList.css';
import Track from "../track/Track";

const TrackList = ({tracks}) => {
  return (
    <div className="TrackList">
      {tracks.map(track => (
        <Track key={track.id} track={track}/>
      ))}
    </div>
  );
};

export default TrackList;
