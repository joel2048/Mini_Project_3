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
      return res.status(400).json({
        error: "order_id, user_id, product_id and quantity are required",
      });
    }
    try {
      const id = Number(req.params.id);

      // check for existing cart
      const order = await Order.findOne({
        where: { user_id: Number(id), is_payed: false },
      });

      //if existing cart
      if (order) {
        const orderItem = await OrderItem.findOne({
          where: { product_id: product_id, order_id: order.order_id},
        });
        // with same product add quantity
        if (orderItem) {
          await OrderItem.increment('quantity',
            { by: 1,
              where: {product_id: product_id}
            },
          )
        } else {
          //if existing cart without same product create entry
          await OrderItem.create({
            user_id,
            product_id,
            order_id: order.order_id,
            quantity,
          });
        }
      }      

      // if no existing unpayed cart, create it first
      if (!order)  {
        const newOrder = await Order.create({ user_id });

        const newItem = await OrderItem.create({
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

  async getCart(req, res) {
    try {
      const id = Number(req.params.id);
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;

      const order = await Order.findOne({
        where: { user_id: Number(id), is_payed: false },
      });

      if (order) {
        const { count, rows: orderItems } = await OrderItem.findAndCountAll({
          where: { user_id: Number(id), order_id: order.order_id },
          include: [
            {
              model: Product,
              attributes: ["product_name", "product_type", "price"],
            },
          ],
          limit,
          offset,
        });

        const response = {
          total: count,
          page,
          totalPages: Math.ceil(count / limit),
          orderItems,
        };

        if (orderItems.length > 0) {
         res.json(response) 
        } else {
          res.json("no items in shopping cart");
        }

      } else {
        res.json("no items in shopping cart");
      }
    } catch (err) {
      res.status(500).json({
        error: "Failed to retrieve shopping cart",
        details: err.message,
      });
    }
  },
};