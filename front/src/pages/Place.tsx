import { useEffect } from "react";
import useGetAttractivePlaces from "../places/usePlaces";
import { useParams } from "react-router-dom";

function Place() {
  const { placeInfo, getPlaceInfo } = useGetAttractivePlaces();
  // get place id from react router
  const { id } = useParams();

  // fetch place info
  useEffect(() => {
    const run = async () => getPlaceInfo(id as string);
    run();
  }, []);

  if (placeInfo) return <h1>{placeInfo.name}</h1>;
  else return <h1>loading...</h1>;
}

export default Place;
