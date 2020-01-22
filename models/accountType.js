const User = require("./user.js");

module.exports = function(sequelize, DataTypes) {
    var accountType = sequelize.define("accountType", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        displayName: DataTypes.STRING,
    }, {
        freezeTableName: true
    });

    accountType.associate = (models) => {
        accountType.hasMany(models.User, { foreignKey: "userId" })
    }

    return accountType;
};