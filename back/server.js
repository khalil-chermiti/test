const express = require("express");
const attractivePlacesRouter = require("./getAttractivePlacesFeature/getAttractivePlacesFeature.js");
const { credentials, corsOptions } = require("./corsConfig.js");
const cors = require("cors");
const searchPlacesByName = require("./searchPlacesByNameFeature/getAttractivePlacesFeature.js");
const searchPlacesByGategory = require("./searchPlacesByCategoryFeature/searchPlacesByCategoryRouter.js");
const searchPlacesByDistance = require("./searchByDistanceFeature/searchPlacesByDistance.js");
const getPlaceDetails = require("./getPlaceDetailsFeature/getPlacesDetailsRouter.js");

const app = express();

app.use(express.json());

app.use(credentials);
app.use(cors(corsOptions));

app.use("/places", attractivePlacesRouter);
app.use("/places", searchPlacesByName);
app.use("/places", searchPlacesByGategory);
app.use("/places", getPlaceDetails);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
