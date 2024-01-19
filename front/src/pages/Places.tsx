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
      <h1 className="text-3xl m-auto mb-10">Search Places : </h1>
      <div className="w-80 m-auto mb-10">
        <label htmlFor="catetory">category:</label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="category"
          id="category"
          onChange={e => searchPlacesByCategory(e.target.value)}
        >
          <option value="historic">historic</option>
          <option value="cultural">cultural</option>
          <option value="cultural">archaeology</option>
          <option value="cultural">fortifications</option>
        </select>
        <div>
          <label htmlFor="name">search name:</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={e => searchPlacesByName(e.target.value)}
          ></input>
        </div>
        <br />
        distance : {distance}
        <input
          type="range"
          min="0"
          max="500"
          step="50"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          onChange={e => searchPlacesByDistance(parseInt(e.target.value))}
        />
      </div>
      <h1 className="text-3xl m-auto mb-10">Found Places : </h1>
      <div className="grid grid-cols-4 gap-4">
        {places.length === 0
          ? "Loading..."
          : places.map(place => (
              <PlaceComponent place={place} key={place.xid} />
            ))}
      </div>
    </div>
  );
}

export default Places;
