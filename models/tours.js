let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Tours = sequelize.define("Tours", {
        tourId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        tourVenue: DataTypes.STRING,
        tourCity: DataTypes.STRING,
        tourState: DataTypes.STRING,
        tourDate: DataTypes.DATE,
        tourTime: DataTypes.TIME
    },
    {
        timestamps: false
    });
    Tours.associate = (models) => {
        Tours.belongsTo(models.Band, {foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Tours;
};