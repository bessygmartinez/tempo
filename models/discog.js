let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discogs", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discYear: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discTracks: {
            type: DataTypes.STRING,
            allowNull: true
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