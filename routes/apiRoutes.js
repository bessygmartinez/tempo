let db = require("../models");

module.exports = function(app) {
    // Get all bands
    app.get("/bands", function(req, res) {
        db.Band.findAll({}).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    // // Create a new example
    // app.post("/api/examples", function(req, res) {
    //     db.Example.create(req.body).then(function(dbExample) {
    //         res.json(dbExample);
    //     });
    // });

    // // Delete an example by id
    // app.delete("/api/examples/:id", function(req, res) {
    //     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
    //         res.json(dbExample);
    //     });
    // });

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