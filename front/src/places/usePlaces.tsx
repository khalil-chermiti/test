import React from "react";
import Place, { PlaceInfo } from "../types/Place";
import getAttractivePlacesApi from "./getAttractivePlacesFeature/getAttractivePlacesApi";
import searchPlacesByNameApi from "./searchPlacesByNameFeature/searchPlacesByNameApi";
import searchByCategoryApi from "./searchByCategory/searchByCategoryApi";
import searchPlacesByDistanceApi from "./searchPlacesByDistanceFeature/searchPlacesByDistanceApi";
import getPlaceInfoApi from "./getPlaceInfoFeature/getPlaceInfoApi";

function useGetAttractivePlaces() {
  const [distance, setDistance] = React.useState<number>(0);
  const [places, setPlaces] = React.useState<Place[]>([]);
  const [placeInfo, setPlaceInfo] = React.useState<PlaceInfo>();

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

  // serach places by distance
  const searchPlacesByDistance = async (distance: number) => {
    setDistance(distance);
    const foundPlaces: Place[] = await searchPlacesByDistanceApi(distance);
    setPlaces(foundPlaces);
  };

  // get place info
  const getPlaceInfo = async (placeId: string) => {
    const data: PlaceInfo = await getPlaceInfoApi(placeId);
    setPlaceInfo(data);
  };

  return {
    places,
    distance,
    placeInfo,
    getAttractivePlaces,
    searchPlacesByName,
    searchPlacesByDistance,
    searchPlacesByCategory,
    getPlaceInfo,
  };
}

export default useGetAttractivePlaces;
