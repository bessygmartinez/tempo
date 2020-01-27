let db = require("../models");

module.exports = function(sequelize, DataTypes) {
    var Discog = sequelize.define("Discogs", {
        discId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
<<<<<<< HEAD
        discTitle: DataTypes.STRING,
        discYear: DataTypes.STRING,
        discTracks: DataTypes.STRING
    }, {
        freezeTableName: true
    });
=======
        discTitle: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discYear: {
            type: DataTypes.STRING,
            allowNull: true
        },
        discTracks: {
            type: DataTypes.STRING,
            allowNull: true
        },
        },
        {
            timestamps: false
        },
        {
            freezeTableName: true
        });
>>>>>>> 86cdde28fd985334fb3dc0b4eb1dc386b2c35e22

    Discog.associate = (models) => {
        Discog.belongsTo(models.Bands, { foreignKey: "bandId", onDelete: "CASCADE" });
    }
    return Discog;
};