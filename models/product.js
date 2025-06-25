module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
        "product",
        {
            product_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            product_type: DataTypes.STRING,
            product_name: DataTypes.STRING,
            description: DataTypes.TEXT,
            price: DataTypes.DECIMAL,
            in_stock: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: "products",
            underscored: true,
            timestamps: false,
        }
    );

    Product.associate = function (models) {
        Product.hasMany(models.WishlistItem, { foreignKey: 'product_id' });
        Product.hasMany(models.OrderItem, { foreignKey: 'product_id' });
    };

    return Product;
};