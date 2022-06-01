import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="Player">
      <div className="TimeControl">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="PlayControl">
        <FontAwesomeIcon className="SkipBack" size={"2x"} icon={faAngleLeft} />
        <FontAwesomeIcon className="Play" size={"2x"} icon={faPlay} />
        <FontAwesomeIcon
          className="SkipForward"
          size={"2x"}
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;