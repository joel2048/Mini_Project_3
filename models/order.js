module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        "order",
        {
            order_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
            user_id: DataTypes.INTEGER,
            price_total: DataTypes.INTEGER,
            is_payed: { type: DataTypes.BOOLEAN, defaultValue: false },
            time_payed: DataTypes.DATE,
            shipment_status: DataTypes.STRING,
        },
        {
            tableName: "orders",
            underscored: true,
            timestamps: false,
        }
    );

    return Order;
};