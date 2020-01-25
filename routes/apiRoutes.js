let db = require("../models");

module.exports = function(app) {
    // Get all bands
    app.get("/api/bands", function(req, res) {
        db.Band.findAll({
            include: [
                { model: db.Discog },
                { model: db.Tours }
            ]
        }).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    //Create a new band
    app.post("/api/bands", function(req, res) {
        let newBand = new Band({
            bandName: req.body.bandName,
            bandPhotoURL: req.body.bandPhotoURL,
            bandHometown: req.body.bandHometown,
            bandGenre: req.body.bandGenre,
            bandBio: req.body.bandBio
        });
        console.log("you hit the POST route!");

        db.Band.create(newBand).then(function(dbBand) {

            let newBandDiscog = new Discog({
                discTitle: req.body.discTitle,
                discYear: req.body.discYear,
                discTracks: req.body.discTracks,
                bandId: req.body.newBand.bandId
        
            })

            // db.Band.create(newBand).then(function(dbBand) {
            console.log(dbBand);
            res.json(dbBand);
        });
    });

};
