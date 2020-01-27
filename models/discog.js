let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discogs", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: {
            type: DataTypes.STRING,
            omitNull: true
        },
        discYear: {
            type: DataTypes.STRING,
            omitNull: true
        },
        discTracks: {
            type: DataTypes.STRING,
            omitNull: true
        },
        },
        {
            timestamps: false
        },
        {
            freezeTableName: true
        });

    Discog.associate = (models) => {
        Discog.belongsTo(models.Bands, {foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Discog;
};