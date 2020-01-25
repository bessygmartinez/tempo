let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discog", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: DataTypes.STRING,
        discYear: DataTypes.STRING,
        discTracks: DataTypes.STRING
        },{
            freezeTableName: true
        });

    Discog.associate = (models) => {
        Discog.belongsTo(models.Band, {foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Discog;
};