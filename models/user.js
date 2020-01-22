const accountType = require("./accountType.js");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        accountType: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }}, {
        freezeTableName: true
    });

    return User;
};