const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/userRoutes");

const app = express();
app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("mongoDB connected");

    app.listen(PORT, () => {
      console.log(`server is connected on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
