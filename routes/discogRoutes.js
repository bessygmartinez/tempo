let db = require("../models");

module.exports = function(app) {
    //Get all discographies
    app.get("/api/discogs", function(req, res) {
        db.Discogs.findAll({
            include: [
                { model: db.Bands, attributes: ["bandName"] }
            ]
        }).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    //Get discography by bandId
    app.get("/api/discogs/:bandId", function(req, res) {
        db.Discogs.findAll({
            include: [
                { model: db.Bands, attributes: ["bandName"]}
            ],
            where: {
                bandId: req.params.bandId
            }
        }).then(function(dbBand) {
            res.json(dbBand);
        });
    });

    //Create new discography
    app.post("/api/discogs", function(req, res) {
        // let newDisc = new Disc({
        //     discTitle: req.body.discTitle,
        //     discYear: req.body.discYear,
        //     discTracks: req.body.discTracks
        // });
        console.log("You hit the discog POST route!");
        db.Discog.create(req.body)
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });

    //Delete a discog by id
    app.delete("/api/discogs/:discId", function(req, res) {
        db.Discogs.destroy({
            where: {
                discId: req.params.discId
            }
        })
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });
};