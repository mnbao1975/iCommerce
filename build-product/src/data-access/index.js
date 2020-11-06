import makeProductDb from "./products-db";
import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DBNAME;
const client = new MongoClient(url, { useNewUrlParser: true });

export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

const productsDb = makeProductDb({ makeDb });
export default productsDb;
