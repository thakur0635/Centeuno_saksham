import express from "express";
import { getProducts, getProductDetails } from "./product.control.js";

const router = express.Router();

router.get("/products/list", getProducts);
router.get("/products/:id", getProductDetails);

export default router;