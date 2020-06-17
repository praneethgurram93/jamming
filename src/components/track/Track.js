import React from 'react';
import './Track.css';

const Track = ({isRemoval, track, onAdd, onRemove}) => {

  const addTrack = () => {

  };

  const removeTrack = () => {

  }

  const renderAction = () => (
    isRemoval ?
        (<button className="Track-action" onClick={removeTrack}>
        -
      </button>) : (
        <button className="Track-action" onClick={addTrack}>
        +
      </button>
      )
  )

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{`${track.artist} | ${track.album}`}</p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
