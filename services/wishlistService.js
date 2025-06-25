const {
  WishlistItem,
  Product
} = require("../models");

module.exports = {
  async getAll(req, res) {
    try {
      const id = Number(req.params.id);
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      console.log("User ID:", id);

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ error: "Valid User ID is required" });
      }

      const { count, rows: wishlistItems } = await WishlistItem.findAndCountAll({
        where: { user_id: Number(id) },
        include: [
             {
               model: Product,
               attributes: ["product_name", "product_type", "price"],
             },
        ],
        attributes: ['product_id'],
        limit,
        offset,
      });


      const response = {
        total: count,
        page,
        totalPages: Math.ceil(count / limit),
        wishlistItems,
      };


      res.json(response);

    } catch (err) {
      res.status(500).json({
        error: "Failed to retrieve wishlist",
        details: err.message,
      });
    }
  },

  async createWishlistItem(req, res) {
    const { user_id, product_id } = req.body;
    if (!user_id || !product_id) {
      return res.status(400).json({ error: "user_id and product_id are required" });
    }
    try {
      await WishlistItem.create(
        {
          user_id,
          product_id,
        },
      );

      res.status(201).json({ message: "item created" });
      
    } catch (err) {
      res.status(500).json({
        error: "Failed to create item",
        details: err.message,
      });
    }
  },
};