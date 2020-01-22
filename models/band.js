const Discog = require("./discogs.js");

module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("band", {
        bandId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        bandName: DataTypes.STRING,
        bandPhotoURL: DataTypes.STRING,
        bandHometown: DataTypes.STRING,
        bandGenre: DataTypes.STRING,
        bandBio: DataTypes.TEXT
    });

    Band.associate = (models) => {
        Band.hasMany(models.discogs, { foreignKey: "bandId" });
        Band.hasMany(models.tours, { foreignKey: "bandId" });
    }
    return Band;
};