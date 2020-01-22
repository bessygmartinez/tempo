let db = require("../models");

module.exports = function(app) {
    // Get all bands
    app.get("/bands", function(req, res) {
        db.bands.findAll({}).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    //Create a new band
    app.post("/bands", function(req, res) {
        let newBand = new Band({
            bandName: req.body.bandName,
            bandPhotoURL: req.body.bandPhotoURL,
            bandHometown: req.body.bandHometown,
            bandGenre: req.body.bandGenre,
            bandBio: req.body.bandBio
        });
        console.log("you hit the POST route!");
        console.log(newBand);
        // db.Bands.create(req.body).then(function(dbBand) {
        db.Band.create(newBand).then(function(dbBand) {
            console.log(dbBand);
            res.json(dbBand);
        });
    });

};