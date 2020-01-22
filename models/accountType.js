const Users = require("./users.js");

module.exports = function(sequelize, DataTypes) {
    var accountType = sequelize.define("accountType", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        displayName: DataTypes.STRING,
    });

    accountType.associate = (models) => {
        accountType.hasMany(models.Users, { foreignKey: "userId" })
    }

    return accountType;
};