module.exports = function(sequelize, DataTypes) {
  var Bands = sequelize.define("bands", {
    bandID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    bandName: DataTypes.STRING,
    bandPhotoURL: DataTypes.STRING,
    bandHometown: DataTypes.STRING,
    bandGenre: DataTypes.STRING,
    bandBio: DataTypes.TEXT
  });
  return Bands;
};
