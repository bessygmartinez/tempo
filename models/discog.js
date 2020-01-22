const Band = require("./band.js");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discog", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: DataTypes.STRING,
        discYear: DataTypes.STRING,
        discTracks: DataTypes.STRING,
        bandId: {
            type: DataTypes.INTEGER,
        }}, {
        freezeTableName: true
    });
    Discog.associate = (models) => {
        Discog.belongsTo(models.Band, { foreignKey: "bandId" });
    }
    return Discog;
};