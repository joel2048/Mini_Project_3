module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define(
        "order-item",
        {
            user_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
            order_id: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
        },
        {
            tableName: "order_items",
            underscored: true,
            timestamps: false,
        }
    );

    OrderItem.associate = function (models) {
        OrderItem.belongsTo(models.Product, { foreignKey: 'product_id' });
        OrderItem.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    return OrderItem;
};