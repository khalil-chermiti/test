import React from "react";
import Place from "../types/Place";
import getAttractivePlacesApi from "./getAttractivePlacesFeature/getAttractivePlacesApi";
import searchPlacesByNameApi from "./searchPlacesByNameFeature/searchPlacesByNameApi";
import searchByCategoryApi from "./searchByCategory/searchByCategoryApi";

function useGetAttractivePlaces() {
  const [places, setPlaces] = React.useState<Place[]>([]);

  const getAttractivePlaces = async () => {
    const data: Place[] = await getAttractivePlacesApi();
    setPlaces(data);
  };

  // search places in state
  const searchPlacesByNameLocally = async (search: string) => {
    if (search.length < 3) return;
    const foundPlaces: Place[] = places.filter(place =>
      place.name.includes(search)
    );
    setPlaces(foundPlaces);
  };

  // search places from api
  const searchPlacesByName = async (search: string) => {
    if (search.length < 3) return;
    const foundPlaces: Place[] = await searchPlacesByNameApi(search);
    setPlaces(foundPlaces);
  };

  // serach by category
  const searchPlacesByCategory = async (category: string) => {
    const foundPlaces: Place[] = await searchByCategoryApi(category);
    setPlaces(foundPlaces);
  };

  return { places, getAttractivePlaces, searchPlacesByName , searchPlacesByCategory };
}

export default useGetAttractivePlaces;
