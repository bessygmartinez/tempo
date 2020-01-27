let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discogs", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: DataTypes.STRING,
        discYear: DataTypes.STRING,
        discTracks: DataTypes.STRING
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