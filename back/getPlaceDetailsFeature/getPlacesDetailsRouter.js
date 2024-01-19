const GET_PLACE_DETAILS = "https://api.opentripmap.com/0.1/en/places/xid/";

const api_key =
  "?apikey=5ae2e3f221c38a28845f05b6e1e72f6e6fae9bc6a9473af209e333f9";

const express = require("express");

const getPlaceDetails = express.Router();

getPlaceDetails.get("/:placeId", async (req, res) => {
  const { placeId } = req.params;

  // fetch data from api
  const response = await fetch(GET_PLACE_DETAILS + placeId + api_key);
  const data = await response.json();

  res.status(200).send(data);
});

module.exports = getPlaceDetails;
