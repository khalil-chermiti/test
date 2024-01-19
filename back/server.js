const express = require("express");
const cors = require("cors");

const { credentials, corsOptions } = require("./config/corsConfig.js");
const searchPlacesByNameRouter = require("./features/searchPlacesByNameFeature/getAttractivePlacesRouter.js");
const searchPlacesByCategoryRouter = require("./features/searchPlacesByCategoryFeature/searchPlacesByCategoryRouter.js");
const searchPlacesByDistanceRouter = require("./features/searchByDistanceFeature/searchPlacesByDistanceRouter.js");
const getPlaceDetailsRouter = require("./features/getPlaceDetailsFeature/getPlacesDetailsRouter.js");
const attrativePlacesRouter = require("./features/getAttractivePlacesFeature/getAttractivePlacesRouter.js");

const app = express();

app.use(express.json());

app.use(credentials);
app.use(cors(corsOptions));

app.use("/places", attrativePlacesRouter);
app.use("/places", searchPlacesByNameRouter);
app.use("/places", searchPlacesByCategoryRouter);
app.use("/places", searchPlacesByDistanceRouter);
app.use("/places", getPlaceDetailsRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
