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

app.get("*", (_, res) => res.status(404).send("No such route exist"));

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected."))
  .catch((error) => console.log("Error in connecting MongoDB!", error));

// Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
