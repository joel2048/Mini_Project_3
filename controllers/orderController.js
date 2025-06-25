const orderService = require("../services/orderService");

module.exports = {
  createOrderItem: (req, res) =>
    orderService.createOrderItem(req, res),

  deleteOrderItem: (req, res) =>
    orderService.deleteOrderItem(req, res),

  payOrder: (req, res) =>
    orderService.payOrder(req, res),
};