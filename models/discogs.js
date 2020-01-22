const Band = require("./band.js");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("discogs", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: DataTypes.STRING,
        discYear: DataTypes.STRING,
        discTracks: DataTypes.STRING,
        bandId: {
            type: DataTypes.INTEGER,
        }
    });
    Discog.associate = (models) => {
        Discog.belongsTo(models.band, { foreignKey: "bandId" });
    }
    return Discog;
};