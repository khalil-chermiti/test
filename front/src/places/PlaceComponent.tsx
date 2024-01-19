import React from "react";
import Place from "../types/Place";

interface Props {
  place: Place;
}

const PlaceComponent: React.FC<Props> = ({ place }) => {
  return (
    <div key={place.xid}>
      <h2>place : {place.name}</h2>
      <ul>
        {place.kinds.split(",").map(kind => (
          <li key={kind}>{kind}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceComponent;
