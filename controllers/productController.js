const productService = require("../services/productService");

module.exports = {
  getAllProducts: (req, res) =>
    productService.getAllProducts(req, res),

  getProductByType: (req, res) =>
    productService.getProductByType(req, res),

  getProductbyPrice: (req, res) =>
    productService.getProductbyPrice(req, res),
};