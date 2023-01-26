import express, { Request, Response } from "express";
import { json } from "body-parser";
import { connectToDatabase } from "./config/dbConnect";

require("dotenv").config();
import { stationRouter } from "./router/station";
import { journeyRouter } from "./router/journey";

import cors from "cors";

const port = 8000;
const app = express();

connectToDatabase()
  .then(() => {
    app.use(cors());
    app.use(json());
    app.use(stationRouter);
    app.use(journeyRouter);
    app.listen(port, () => {
      console.log(`listening on port ${port}....`);
    });
    app.all("*", (req, res) => {
      res.status(404);
      if (req.accepts("html")) {
        // return res.sendFile(path.join(__dirname, "views", "404.html"));
        return res.json({ msg: "fail" });
      } else if (req.accepts("json")) {
        res.json({ msg: "404 not found" });
      } else {
        res.type("txt").send("404 not found");
      }
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
