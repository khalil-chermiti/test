const getAttractivePlacesApi = async () => {
  const response = await fetch("http://localhost:3000/places/attractive");
  const data = await response.json();
  return data;
};

export default getAttractivePlacesApi;
