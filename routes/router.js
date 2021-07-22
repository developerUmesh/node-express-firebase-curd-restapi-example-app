import express from "express";

 import productController from "../controllers/productController";
const route = express.Router();


route.post("/addprodct",productController.addProduct);
route.get("/getproducts",productController.getProducts);
route.get("/getproduct/:id",productController.getProduct);
route.put("/updateproduct/:id",productController.updateProduct);
route.delete("/deleteproduct/:id",productController.deleteProduct);

export default route;
