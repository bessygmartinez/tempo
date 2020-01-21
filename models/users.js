const accountType = require("./account_type.js");

module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
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
    }
  });

  return Users;
};