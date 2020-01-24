let db = require("../models");

module.exports = function(app) {
    //Get all discographies
    app.get("/api/discogs", function(req, res) {
        db.Discog.findAll({
            include: [
                { model: db.Band, attributes: ["bandName"] }
            ]
        }).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    //Get discography by bandId
    app.get("/api/discogs/:bandId", function(req, res) {
        db.Discog.findAll({
            include: [
                { model: db.Band, attributes: ["bandName"]}
            ],
            where: {
                bandId: req.params.bandId
            }
        }).then(function(dbBand) {
            res.json(dbBand);
        });
    });

    //Create new discography
    app.post("/api/bands", function(req, res) {
        let newDisc = new Disc({
            discTitle: req.body.discTitle,
            discYear: req.body.discYear,
            discTracks: req.body.discTracks
        });
        console.log("You hit the discog POST route!");
        db.Discog.create(newDisc)
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });

    //Delete a discog by id
    app.delete("/api/discog/:discId", function(req, res) {
        db.Discog.destroy({
            where: {
                discId: req.params.discId
            }
        })
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });
};