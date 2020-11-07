import { makeDb } from "../src/data-access";
import dotenv from "dotenv";
dotenv.config();
(async function setupDb() {
  console.log("Setting up database...");
  // database collection will automatically be created if it does not exist
  // indexes will only be added if they don't exist
  const db = await makeDb();
  const result = await db.collection("comments").createIndexes([
    { key: { name: 1 }, name: "name_idx" },
    { key: { price: 1 }, name: "price_idx" },
    { key: { branch: 1 }, name: "branch_idx" },
  ]);
  console.log(result);
  console.log("Database setup complete...");
  process.exit();
})();
