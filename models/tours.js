const Bands = require("./bands.js");

module.exports = function(sequelize, DataTypes) {
  var Tours = sequelize.define("tours", {
    tourId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tourVenue: DataTypes.STRING,
    tourCity: DataTypes.STRING,
    tourState: DataTypes.STRING,
    tourDate: DataTypes.DATE,
    tourTime: DataTypes.TIME,
    bandID: {
      type: DataTypes.STRING,
    }
  });
  Tours.associate = (models) => {
      Tours.belongsTo(models.bands, {foreignKey: "bandID"});
  }
  return Tours;
};