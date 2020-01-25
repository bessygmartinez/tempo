let db = require("../models");

module.exports = function(app) {
    //Get all tours
    app.get("/api/tours", function(req, res) {
        db.Tours.findAll({
            include: [
                { model: db.Bands, attributes: ["bandName"]}
            ]
        }).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    //Get tours by bandId
    app.get("/api/tours/:bandId", function(req, res) {
        db.Tours.findAll({
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

    app.post("/api/tours", function(req, res) {
        // let newTour = new Tour({
        //     tourVenue: req.body.tourVenue,
        //     tourCity: req.body.tourCity,
        //     tourState: req.body.tourState,
        //     tourDate: req.body.tourDate,
        //     tourTime: req.body.tourTime
        // });
        console.log("You hit the tours POST route!");
        db.Tours.create(req.body)
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });

    //Delete a tour by tourId
    app.delete("/api/tours/:tourId", function(req, res) {
        db.Tours.destroy({
            where: {
                tourId: req.params.tourId
            }
        })
        .then(function(dbBand) {
            res.json(dbBand);
        });
    });
};