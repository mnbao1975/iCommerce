import proxy from "express-http-proxy";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
// For testing
app.get("/hello", (_, res) => {
  res.send("Hello World!");
});

const buildProductProxy = proxy(process.env.BUID_PRO_URL);
const searchProductProxy = proxy(process.env.SEARCH_PRO_URL);

// Route to the buidl-product service
app.post("/products", (req, res, next) => {
  buildProductProxy(req, res, next);
});
app.delete("/products/:id", (req, res, next) => {
  buildProductProxy(req, res, next);
});
app.patch("/products/:id", (req, res, next) => {
  buildProductProxy(req, res, next);
});

// Route to the search-prodcut service
app.get("/products", (req, res, next) => {
  searchProductProxy(req, res, next);
});
app.get("/products/:id", (req, res, next) => {
  searchProductProxy(req, res, next);
});
// -----

app.use((req, res) => {
  res.status(404).json({ error: "Not found." });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
