module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "user",
        {
            user_id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
            user_name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            date_joined: DataTypes.DATE,
            is_deleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        },
        {
            tableName: "users",
            underscored: true,
            timestamps: false,
        }
    );

    User.associate = function (models) {
        User.hasMany(models.WishlistItem, { foreignKey: 'user_id' });
        User.hasMany(models.OrderItem, { foreignKey: 'user_id' });
    };

    return User;
};