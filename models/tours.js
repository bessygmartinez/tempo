let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Tours = sequelize.define("Tours", {
        tourId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tourVenue: {
            type: DataTypes.STRING,
            omitNull: true
        },
        tourCity: {
            type: DataTypes.STRING,
            omitNull: true
        },
        tourState: {
            type: DataTypes.STRING,
            omitNull: true
        },
        tourDate: {
            type: DataTypes.STRING,
            omitNull: true
        },
        tourTime: {
            type: DataTypes.STRING,
            omitNull: true
        },
    },
    {
        timestamps: false
    });
    Tours.associate = (models) => {
        Tours.belongsTo(models.Bands, {foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Tours;
};