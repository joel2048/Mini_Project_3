module.exports = (sequelize, DataTypes) => {
    const UserInfo = sequelize.define(
        "user-info",
        {
            user_id: DataTypes.STRING,
            full_name: DataTypes.STRING,
            dob: DataTypes.STRING,
            address: DataTypes.STRING,
            iban: DataTypes.STRING,
            bic: DataTypes.STRING,
        },
        {
            tableName: "user-infos",
            underscored: true,
            timestamps: false,
        }
    );

    return UserInfo;
};