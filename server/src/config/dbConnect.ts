import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { URL } from "url";
require("dotenv").config();
export const collections: { station?: mongoDB.Collection; journey?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.MONGODB_API);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const stationCollection: mongoDB.Collection = db.collection("stations");
  const journeyCollection: mongoDB.Collection = db.collection("journey");

  collections.station = stationCollection;
  collections.journey = journeyCollection;

}
