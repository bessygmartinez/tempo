const Band = require("./band.js");

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
        tourTime: DataTypes.TIME,
        bandId: {
            type: DataTypes.INTEGER,
        }
    });
    Tours.associate = (models) => {
        Tours.belongsTo(models.Band, { foreignKey: "bandId" });
    }
    return Tours;
};