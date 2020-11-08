import makeEventDb from "./events-db";
import mongodb from "mongodb";
import Redis from "ioredis";

const MongoClient = mongodb.MongoClient;
const mongoURL = process.env.MONGO_URL;
const mongoDBName = process.env.MONGO_DBNAME;
const mongoClient = new MongoClient(mongoURL, { useUnifiedTopology: true });

const redisURL = process.env.REDIS_URL;
const redisClient = new Redis(redisURL);

export async function makeRedis() {
  if (!redisClient) {
    return new Redis(redisURL);
  }
  return redisClient;
}

export async function makeDb() {
  if (!mongoClient.isConnected()) {
    await mongoClient.connect();
  }
  return mongoClient.db(mongoDBName);
}

const eventsDb = makeEventDb({ makeDb });

export default eventsDb;
export { eventsDb };
