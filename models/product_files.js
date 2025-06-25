module.exports = (sequelize, DataTypes) => {
    const ProductFiles = sequelize.define(
        "Product Files",
        {
            product_id: DataTypes.INTEGER,
            image: DataTypes.VARBINARY(MAX),
        },
        {
            tableName: "Product Files",
            underscored: true,
            timestamps: false,
        }
    );

    return ProductFiles;
};