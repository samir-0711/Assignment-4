import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import product from "./route/product.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// Routes
const apiUrlVersion = "/products";
app.use(`${apiUrlVersion}`, product);

app.use("/", (_, res) => res.send("Welcome to Assignment 4"));

const databaseConnectionString = process.env.MONGO_URL;

// MongoDB Connection
mongoose
  .connect(databaseConnectionString)
  .then(() => console.log("MongoDB Connected."))
  .catch((error) => console.log("Error in connecting MongoDB!", error));

app.use((err, req, res, next) => {
  res.status(err.status ? err.status : 500);
  const message = err.status
    ? err.message
    : "Error occured while handling your request";
  res.send(message);
});

// Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
