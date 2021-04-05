const path = require("path");

const express = require("express");

const adminData = require("./admin");

const {
  getIndex,
  getProducts,
  getCart,
  getOrders,
  getProduct,
  postCart,
  postCartDeleteProduct,
  postOrder,
} = require("../controllers/shop");

const router = express.Router();

router.get("/", getIndex);

router.get("/products", getProducts);

router.get("/products/:productId", getProduct);

router.get("/cart", getCart);

router.post("/cart", postCart);

router.post("/cart-delete-item", postCartDeleteProduct);

router.post('/create-order', postOrder);

router.get("/orders", getOrders);

module.exports = router;
