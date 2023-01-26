import express, { Response, Request } from "express";
import { collections } from "../config/dbConnect";
import Station from "../model/station";
const router = express.Router();
router
  .post("/api/station", async (req: Request, res: Response) => {
    try {
      const newData = req.body as Station;
      const result = await collections.station?.insertOne({ newData });
      result
        ? res.status(201).send(`Successfully created a new game with id ${result.insertedId}`)
        : res.status(500).send("Failed to create a new game.");
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  })
  .get("/api/station", async (req: Request, res: Response) => {
    try {
      const result = await collections.station?.find().toArray();
      res.status(200).json({ result, msg: "ok" });
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  });

export { router as stationRouter };
