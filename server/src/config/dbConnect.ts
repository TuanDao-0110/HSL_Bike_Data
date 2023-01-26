import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
export const collections: { games?: mongoDB.Collection; station?: mongoDB.Collection; journey?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient("mongodb+srv://tuan:1234@cluster0.j8wwzkf.mongodb.net/?retryWrites=true&w=majority");

  await client.connect();

  const db: mongoDB.Db = client.db("Bike");

  const gamesCollection: mongoDB.Collection = db.collection("games");
  const stationCollection: mongoDB.Collection = db.collection("stations");
  const journeyCollection: mongoDB.Collection = db.collection("journey");

  collections.games = gamesCollection;
  collections.station = stationCollection;
  collections.journey = journeyCollection;

  console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
}
