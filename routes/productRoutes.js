const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get(
  "/products",
  productController.getAllProducts
);

router.get(
  "/products/type",
  productController.getProductByType
);

router.get(
  "/products/price/:direction",
  productController.getProductbyPrice
);

module.exports = router;