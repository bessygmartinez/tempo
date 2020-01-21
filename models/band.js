module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Band', {
        bandId: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        bandName: DataTypes.STRING,
        bandPhotoURL: DataTypes.STRING,
        bandHometown: DataTypes.STRING,
        bandGenre: DataTypes.STRING,
        bandBio: DataTypes.TEXT
    })
}