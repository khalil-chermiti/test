const express = require("express");
const attractivePlacesRouter = require("./getAttractivePlacesFeature/getAttractivePlacesFeature.js");
const { credentials, corsOptions } = require("./corsConfig.js");
const cors = require("cors");
const searchPlacesByName = require("./searchPlacesByNameFeature/getAttractivePlacesFeature.js");

const app = express();

app.use(express.json());

app.use(credentials);
app.use(cors(corsOptions));

app.use("/places", attractivePlacesRouter);
app.use("/places", searchPlacesByName);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
