async function getPlaceInfoApi(placeId: string) {
  const response = await fetch("http://localhost:3000/places/" + placeId);
  const data = await response.json();
  return data;
}

export default getPlaceInfoApi;
