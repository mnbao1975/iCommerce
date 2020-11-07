import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { postProduct, deleteProduct, notFound } from "./controllers";
import makeExpressRouter from "./express-router";

dotenv.config();
const app = express();
app.use(bodyParser.json());
// For testing
app.get("/hello", (_, res) => {
  res.send("Hello World!");
});

app.post("/products", makeExpressRouter(postProduct));
app.delete("/products/:id", makeExpressRouter(deleteProduct));
app.use(makeExpressRouter(notFound));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
