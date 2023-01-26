import express, { Response, Request } from "express";
import * as fs from "fs";
import * as path from "path";

import { collections } from "../config/dbConnect";
import Journey from "../model/journey";

const filePath: string = "../../importdata/journey/time_table_0.json";

const router = express.Router();
router.get("/api/journey", async (req: Request, res: Response) => {
  try {
    const { page } = req.query;
    const result = await collections?.journey
      ?.find({})
      .limit(400)
      .skip(Number(page) * 400)
      .toArray();
    res.status(200).json({ result, msg: "ok" });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});
export { router as journeyRouter };
