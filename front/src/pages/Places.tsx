import React, { useEffect } from "react";
import useGetAttractivePlaces from "../getAttractivePlacesFeature/useGetAttractivePlaces";
import PlaceComponent from "../getAttractivePlacesFeature/PlaceComponent";

function Places() {
  // places state from hook
  const { places, getAttractivePlaces } = useGetAttractivePlaces();

  // load places from backend
  useEffect(() => {
    const run = async () => getAttractivePlaces();
    run();
  }, []);

  if (places.length === 0) return <div>Loading...</div>;

  return (
    <div>
      {places.map(place => (
        <PlaceComponent place={place} key={place.xid} />
      ))}
    </div>
  );
}

export default Places;
