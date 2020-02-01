let db = require("../models");

module.exports = function(app) {
    //Get all bands
    // app.get("/api/bands", function(req, res) {
    //     db.Bands.findAll({
    //         include: [
    //             { model: db.Discogs },
    //             { model: db.Tours }
    //         ]
    //     }).then(function(dbBands) {
    //         res.json(dbBands);
    //     });
    // });

    // app.get("/api/bands/:bandId", function(req, res) {
    //     db.Bands.findOne({
    //         include: [
    //             { model: db.Discogs },
    //             { model: db.Tours }
    //         ],
    //         where: {
    //            bandId: req.params.bandId
    //         }
    //     }).then(function(dbBand) {
    //         res.json(dbBand);
    //     });
    // });

    //Create a new band
    app.post("/api/bands", function(req, res) {
        console.log("You hit the new band POST bandRoute!");
        db.Bands.create(req.body);
    });

    //Delete a band by id
    app.delete("/api/bands/:bandId", function(req, res) {
        console.log("You hit the back end band delete bandRoute!");
        console.log("band id:");
        console.log(req.params.bandId);
        db.Bands.destroy({
                where: {
                    bandId: req.params.bandId
                }
            })
            .then(function(dbBands) {
                console.log("FLASH DELETE SUCCESS");
                res.json(dbBands);
            });
    });
};