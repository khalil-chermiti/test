import React from "react";
import Place from "../types/Place";
import getAttractivePlacesApi from "./getAttractivePlacesApi";

function useGetAttractivePlaces() {
  const [places, setPlaces] = React.useState<Place[]>([]);

  const getAttractivePlaces = async () => {
    const data: Place[] = await getAttractivePlacesApi();
    setPlaces(data);
  };

  return { places, getAttractivePlaces };
}

export default useGetAttractivePlaces;
