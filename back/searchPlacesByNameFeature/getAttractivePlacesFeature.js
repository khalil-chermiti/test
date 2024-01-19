const SEARCH_PLACES_BY_NAME_URL =
  "https://api.opentripmap.com/0.1/en/places/radius?apikey=5ae2e3f221c38a28845f05b6e1e72f6e6fae9bc6a9473af209e333f9&radius=5000&lon=10.63699&lat=35.82539&format=json&name=";

const express = require("express");

const searchPlacesByName = express.Router();

searchPlacesByName.post("/search", async (req, res) => {
  const name = req.body.name;

  // fetch data from api
  let places = [];

  const response = await fetch(SEARCH_PLACES_BY_NAME_URL + name);
  const data = await response.json();
  places = data;

  res.status(200).send(places);
});

module.exports = searchPlacesByName;
