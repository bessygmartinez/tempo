let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Band = sequelize.define("Bands", {
        bandId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        bandName: DataTypes.STRING,
        bandPhotoURL: DataTypes.STRING,
        bandHometown: DataTypes.STRING,
        bandGenre: DataTypes.STRING,
        bandBio: DataTypes.TEXT,
    }, {
        timestamps: false
    },
    {
        freezeTableName: true
    });

    Band.associate = (models) => {
        Band.hasMany(models.Discogs, { foreignKey: "bandId", onDelete: "CASCADE" });
        Band.hasMany(models.Tours, { foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Band;
};