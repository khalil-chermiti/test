const searchPlacesByNameApi = async (name: string) => {
  const response = await fetch("http://localhost:3000/places/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  });

  const data = await response.json();
  return data;
};

export default searchPlacesByNameApi;
