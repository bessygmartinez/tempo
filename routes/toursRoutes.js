let db = require("../models");

module.exports = function(app) {
    //Get all tours
    app.get("/api/tours", function(req, res) {
        db.Tours.findAll({
            include: [
                { model: db.Band, attributes: ["bandName"]}
            ]
        }).then(function(dbBands) {
            res.json(dbBands);
        });
    });
}