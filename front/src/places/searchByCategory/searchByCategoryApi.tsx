const searchByCategoryApi = async (category: string) => {
  const response = await fetch("http://localhost:3000/places/category", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ category }),
  });
  const data = await response.json();
  return data;
};

export default searchByCategoryApi;
