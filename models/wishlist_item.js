module.exports = (sequelize, DataTypes) => {
    const WishlistItem = sequelize.define(
        "wishlist-item",
        {
            user_id: DataTypes.INTEGER,
            product_id: DataTypes.INTEGER,
        },
        {
            tableName: "wishlist-items",
            underscored: true,
            timestamps: false,
        }
    );

    WishlistItem.associate = function (models) {
        WishlistItem.belongsTo(models.Product, { foreignKey: 'product_id' });
        WishlistItem.belongsTo(models.User, { foreignKey: 'user_id' });
    };

    return WishlistItem;
};