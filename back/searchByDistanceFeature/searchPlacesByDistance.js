const SEARCH_PLACES_BY_DISTANCE =
  "https://api.opentripmap.com/0.1/en/places/radius?apikey=5ae2e3f221c38a28845f05b6e1e72f6e6fae9bc6a9473af209e333f9&radius=5000&lon=10.63699&lat=35.82539&format=json";

const express = require("express");

const searchPlacesByDistance = express.Router();

searchPlacesByDistance.post("/distance", async (req, res) => {
  const distance = req.body.distance;

  let places = [];

  const response = await fetch(SEARCH_PLACES_BY_DISTANCE);
  const data = await response.json();
  places = data;

  const filteredPlaces = places.filter(place => place.dist <= distance);

  res.status(200).send(filteredPlaces);
});

module.exports = searchPlacesByDistance;
