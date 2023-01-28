import express from "express";
import { json } from "body-parser";
import { connectToDatabase } from "./config/dbConnect";
import { journeyRouter } from "./router/journey";
import { stationRouter } from "./router/station";
import cors from "cors";
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();
connectToDatabase()
  .then(() => {
    app.use(cors());
    app.use(json());
    app.use(stationRouter);
    app.use(journeyRouter);
    app.listen(PORT, () => {
      console.log(`listening at ${PORT}....`);
    });
    app.all("*", (req, res) => {
      res.status(404);
      if (req.accepts("html")) {
        return res.json({ msg: "fail" });
      } else if (req.accepts("json")) {
        res.json({ msg: "404 not found" });
      } else {
        res.type("txt").send("404 not found");
      }
    });
  })
  .catch((error: Error) => {
    process.exit();
  });
