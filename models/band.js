const Discog = require("./discog.js");

module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
        bandId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        bandName: DataTypes.STRING,
        bandPhotoURL: DataTypes.STRING,
        bandHometown: DataTypes.STRING,
        bandGenre: DataTypes.STRING,
        bandBio: DataTypes.TEXT
    }, {
        freezeTableName: true
    });

    Band.associate = (models) => {
        Band.hasMany(models.Discog, { foreignKey: "bandId" });
        Band.hasMany(models.Tours, { foreignKey: "bandId" });
    }
    return Band;
};