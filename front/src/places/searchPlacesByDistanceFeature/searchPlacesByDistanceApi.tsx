const searchPlacesByDistanceApi = async (distance: number) => {
  const response = await fetch("http://localhost:3000/places/distance", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ distance }),
  });
  const data = await response.json();
  return data;
};

export default searchPlacesByDistanceApi;
