let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discogs", {
        discId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        discTitle: DataTypes.STRING,
        discYear: DataTypes.STRING,
        discTracks: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Discog.associate = (models) => {
        Discog.belongsTo(models.Bands, { foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Discog;
};