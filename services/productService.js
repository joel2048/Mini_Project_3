const {
  Product
} = require("../models");

module.exports = {
  async getAllProducts(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const { count, rows: products } = await Product.findAndCountAll({
        attributes: ["product_id", "product_type", "product_name", "price", "in_stock"],
        limit,
        offset,
      });

      const response = {
        total: count,
        page,
        totalPages: Math.ceil(count / limit),
        products,
      };

      res.json(response);
    } catch (err) {
      res.status(500).json({
        error: "Failed to retrieve products",
        details: err.message,
      });
    }
  },
};