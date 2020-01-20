const Bands = require("./bands.js");

module.exports = function(sequelize, DataTypes) {
  var Discog = sequelize.define("discogs", {
    discID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    discTitle: DataTypes.STRING,
    discYear: DataTypes.STRING,
    discTracks: DataTypes.STRING,
    bandID: {
      type: DataTypes.STRING,
    }
  });
  Discog.associate = (models) => {
      Discog.belongsTo(models.bands, {foreignKey: "bandID"});
  }
  return Discog;
};
