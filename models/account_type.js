const Users = require("./users.js");

module.exports = function(sequelize, DataTypes) {
  var accountType = sequelize.define("account_types", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
  });

  accountType.associate = (models) => {
      accountType.hasMany(models.users, {foreignKey: "userId"})
  }

  return accountType;
};