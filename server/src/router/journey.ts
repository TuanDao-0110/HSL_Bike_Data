import express, { Response, Request } from "express";

import { collections } from "../config/dbConnect";

const router = express.Router();
router.get("/api/journey", async (req: Request, res: Response) => {
  try {
    const { page } = req.query;
    if (Number(page) !== 0) {
      const result = await collections?.journey?.find({}).limit(Number(page)).toArray();
      res.status(200).json({ result, msg: "ok" });
    } else {
      console.log("get all");
      const result = await collections?.journey?.find().toArray();
      res.status(200).json({ result, msg: "ok" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
});
export { router as journeyRouter };
