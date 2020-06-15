import React from "react";
import './TrackList.css';
import Track from "../track/Track";

const TrackList = () => {
  return (
    <div className="TrackList">
      {/* <!-- You will add a map method that renders a set of Track components  --> */}
      <Track />
    </div>
  );
};

export default TrackList;
