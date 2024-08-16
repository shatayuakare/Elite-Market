import express from "express"
import { createProduct, dropProduct, getProduct, getProducts, updateProduct } from "../controller/product.controller.js";

const productRoute = express.Router();

// localhost:4000/products
productRoute.get("/", getProducts)
productRoute.get("/:id", getProduct)
productRoute.post("/create", createProduct)
productRoute.post("/update/:id", updateProduct)
productRoute.get("/delete/:id", dropProduct)

export default productRoute