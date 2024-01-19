const express = require("express")
const attractivePlacesRouter = require("./getAttractivePlacesFeature/getAttractivePlacesFeature.js");
const { credentials, corsOptions } = require("./corsConfig.js");
const cors = require("cors");


const app = express();

app.use(credentials);
app.use(cors(corsOptions));

app.use("/places", attractivePlacesRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
