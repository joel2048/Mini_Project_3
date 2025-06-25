const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config/config")["development"];

const sequelize = new Sequelize(config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Load models
db.Product = require("./product")(sequelize, DataTypes);
db.WishlistItem = require("./wishlist_item")(sequelize, DataTypes);
db.Order = require("./order")(sequelize, DataTypes);
db.OrderItem = require("./order_items")(sequelize, DataTypes);

// Model Associations
db.WishlistItem.belongsTo(db.Product, { foreignKey: 'product_id' })
db.Product.hasMany(db.WishlistItem, { foreignKey: 'product_id' })

module.exports = db;
