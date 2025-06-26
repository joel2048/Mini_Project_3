const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get(
  "/cart/:id/get",
  orderController.getCart
)

router.post(
  "/cart/:id/put",
  orderController.createOrderItem
);

router.delete(
  "/cart/:id/remove",
  orderController.deleteOrderItem
)

router.post(
  "/cart/:id/pay",
  orderController.payOrder
)

module.exports = router;