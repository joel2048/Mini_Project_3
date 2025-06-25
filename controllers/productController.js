const productService = require("../services/productService");

module.exports = {
  getAllProducts: (req, res) =>
    productService.getAllProducts(req, res),
};