import { useEffect } from "react";
import useGetAttractivePlaces from "../places/usePlaces";
import PlaceComponent from "../places/PlaceComponent";

function Places() {
  // places state from hook
  const {
    places,
    distance,
    getAttractivePlaces,
    searchPlacesByName,
    searchPlacesByCategory,
    searchPlacesByDistance,
  } = useGetAttractivePlaces();

  // load places from backend
  useEffect(() => {
    const run = async () => getAttractivePlaces();
    run();
  }, []);

  return (
    <div>
      <label htmlFor="catetory">category:</label>
      <select
        name="category"
        id="category"
        onChange={e => searchPlacesByCategory(e.target.value)}
      >
        <option value="historic">historic</option>
        <option value="cultural">cultural</option>
        <option value="cultural">archaeology</option>
        <option value="cultural">fortifications</option>
      </select>
      <br />
      <input
        type="text"
        onChange={e => searchPlacesByName(e.target.value)}
      ></input>
      <br />
      distance : {distance}
      <input
        type="range"
        min="0"
        max="500"
        step="50"
        onChange={e => searchPlacesByDistance(parseInt(e.target.value))}
      />
      {places.length === 0
        ? "Loading..."
        : places.map(place => <PlaceComponent place={place} key={place.xid} />)}
    </div>
  );
}

export default Places;
