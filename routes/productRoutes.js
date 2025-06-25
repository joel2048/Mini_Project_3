const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get(
  "/products",
  productController.getAllProducts
);

// router.get(
//   "/products/type",
//   productController.get
// );

// router.get(
//   "/products/pricedown",
//   productController.get
// );

// router.get(
//   "/products/priceup",
//   productController.getP
// );

module.exports = router;