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
db.User = require("./user")(sequelize, DataTypes);

// Model Associations
db.WishlistItem.belongsTo(db.Product, { foreignKey: 'product_id' })
db.Product.hasMany(db.WishlistItem, { foreignKey: 'product_id' })
db.Product.hasMany(db.OrderItem, { foreignKey: 'product_id' });
db.OrderItem.belongsTo(db.Order, { foreignKey: 'order_id' });
db.OrderItem.belongsTo(db.Product, { foreignKey: 'product_id' });
db.OrderItem.belongsTo(db.User, { foreignKey: 'user_id' });
db.Order.hasMany(db.OrderItem, { foreignKey: 'order_id' });
db.User.hasMany(db.WishlistItem, { foreignKey: 'user_id' });
db.User.hasMany(db.OrderItem, { foreignKey: 'user_id' });




module.exports = db;
