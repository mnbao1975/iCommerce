import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { getProductId, notFound } from "./controllers";
import makeExpressRouter from "./express-router";

dotenv.config();
const app = express();
app.use(bodyParser.json());
// For testing
app.get("/hello", (_, res) => {
  res.send("Hello World!");
});

app.get("/products/:id", makeExpressRouter(getProductId));
app.use(makeExpressRouter(notFound));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
