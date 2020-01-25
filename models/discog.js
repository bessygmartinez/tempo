let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discog", {
        discId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        discTitle: {
            type: DataTypes.STRING,
            defaultValue: "title"
        },
        discYear: {
            type: DataTypes.STRING,
            defaultValue: "year"
        },
        discTracks: {
            type: DataTypes.STRING,
            defaultValue: "tracks"
        },
        bandId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        }, {
            freezeTableName: true
        });

    Discog.associate = (models) => {
        Discog.belongsTo(models.Band, {foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Discog;
};