module.exports = function(sequelize, DataTypes) {
  var Bands = sequelize.define("Bands", {
    name: DataTypes.STRING,
    photoURL: DataTypes.STRING,
    hometown: DataTypes.STRING,
    genre: DataTypes.STRING,
    bio: DataTypes.TEXT
  });
  return Bands;
};
