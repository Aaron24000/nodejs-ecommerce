const path = require("path");

const express = require("express");

const adminData = require("./admin");

const isAuth = require('../middleware/is-auth');

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

router.get("/cart", isAuth, getCart);

router.post("/cart", isAuth, postCart);

router.post("/cart-delete-item", isAuth, postCartDeleteProduct);

router.post('/create-order', isAuth, postOrder);

router.get("/orders", isAuth, getOrders);

module.exports = router;
