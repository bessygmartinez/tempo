let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Tours = sequelize.define("Tours", {
        tourId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tourVenue: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tourCity: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tourState: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tourDate: {
            type: DataTypes.STRING,
            allowNull: true
        },
        tourTime: {
            type: DataTypes.STRING,
            allowNull: true
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