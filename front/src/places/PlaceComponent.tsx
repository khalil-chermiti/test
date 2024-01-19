import React from "react";
import Place from "../types/Place";
import { useNavigate } from "react-router-dom";

interface Props {
  place: Place;
}

const PlaceComponent: React.FC<Props> = ({ place }) => {
  const navigate = useNavigate();

  return (
    <div key={place.xid}>
      <h2>place : {place.name}</h2>
      <ul>
        {place.kinds.split(",").map(kind => (
          <li key={kind}>{kind}</li>
        ))}
      </ul>

      <button onClick={() => navigate(`/place/${place.xid}`)}>find more</button>
    </div>
  );
};

export default PlaceComponent;
