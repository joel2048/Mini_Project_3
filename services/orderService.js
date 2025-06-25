const {
  User,
  Product,
  OrderItem,
  Order,
} = require("../models");

module.exports = {
  async createOrderItem(req, res) {
    const { user_id, product_id, quantity } = req.body;
    if (!user_id || !product_id) {
      return res
        .status(400)
        .json({
          error: "order_id, user_id, product_id and quantity are required",
        });
    }
    try {
      const id = Number(req.params.id);

      // check for existing cart
      const order = await Order.findOne({
        where: { user_id: Number(id), is_payed: false },
      });

      if (order) {
        await OrderItem.create({
          user_id,
          product_id,
          order_id: order.order_id,
          quantity,
        });
      } else {
        // if no existing unpayed cart, create it first
        const newOrder = await Order.create({ user_id });

        const orderItem = await OrderItem.create({
          user_id,
          product_id,
          order_id: newOrder.order_id,
          quantity,
        });
      }

      res.status(201).json({ message: "item created" });
    } catch (err) {
      res.status(500).json({
        error: "Failed to create item",
        details: err.message,
      });
    }
  },

  async deleteOrderItem(req, res) {
    const { product_id } = req.body;
    if (!product_id) {
      return res.status(400).json({ error: "product_id is required" });
    }

    try {
      const id = Number(req.params.id);
      await OrderItem.destroy({
        where: { user_id: Number(id), product_id: product_id },
      });

      res.status(201).json({ message: "item removed" });
    } catch (err) {
      res.status(500).json({
        error: "Failed to delete item",
        details: err.message,
      });
    }
  },

  async payOrder(req, res) {
    const { order_id } = req.body;

    try {
      const id = Number(req.params.id);
      const order = await Order.findOne({
        where: { order_id: order_id, user_id: Number(id), is_payed: false },
      });

      if (order) {
        Order.update(
          { is_payed: true },
          {
            where: { order_id: order_id, is_payed: false },
          }
        );
        res.status(201).json({ message: "order payed" });
      } else {
        res.status(201).json({ message: "nothing in shopping cart" });
      }
    } catch (err) {
      res.status(500).json({
        error: "payment failed",
        details: err.message,
      });
    }
  },

  
};