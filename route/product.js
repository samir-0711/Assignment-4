import express from "express";
const router = express.Router();

import {
  addProduct,
  getProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

router.post("/", addProduct);
router.get("/:id", getProduct);
router.get("/", getAllProduct);
router.put("/", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
