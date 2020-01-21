let db = require("../models");

module.exports = function(app) {
    // Load example index page
    // app.get("/", function(req, res) {
    //     db.Example.findAll({}).then(function(dbExamples) {
    //         res.render("index", {
    //             msg: "Hello!",
    //             example: dbExamples
    //         });
    //     });
    // });
    //load bands index page
    app.get("/", function(req, res) {
        db.Band.findAll({}).then(function(dbBands) {
            res.render("index", {
                msg: "Hello!",
                example: dbBands
            });
        });
    });

    app.get("/band/:id", function(req, res) {
        db.Band
            .findOne({
                where: { id: req.params.bandId }
            })
            .then(function(dbBand) {
                if (dbBand === null) {
                    res.render("404");
                } else {
                    res.render("dbbandpage", {
                        bandName: dbBands.bandName,
                        bandPhotoURL: dbBands.bandPhotoURL,
                        bandHometown: dbBands.bandHometown,
                        bandGenre: dbBands.bandGenre,
                        bandBio: dbBands.bandBio
                    });
                }
            });
    });

    // Load example page and pass in an example by id
    // app.get("/example/:id", function(req, res) {
    //     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
    //         res.render("example", {
    //             example: dbExample
    //         });
    //     });
    // });

    app.get("/about", function(req, res) {
        res.render("about");
    });

    app.get("/bandlogin", function(req, res) {
        res.render("bandlogin");
    });

    app.get("/newband", function(req, res) {
        res.render("newband");
    });

    app.get("/bandregister", function(req, res) {
        res.render("bandregister");
    });

    app.get("/fanlogin", function(req, res) {
        res.render("fanlogin");
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};