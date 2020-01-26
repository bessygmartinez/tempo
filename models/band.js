let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("Band", {
        bandId: {
            type: DataTypes.INTEGER,
            // defaultValue: 0,
            autoIncrement: true,
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
        Band.hasMany(models.Discog, { foreignKey: "bandId", onDelete: "CASCADE" });
        Band.hasMany(models.Tours, { foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Band;
};