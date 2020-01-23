var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Band.findAll({}).then(function(dbBands) {
            res.render("index", {
                msg: "Hello!",
                bands: dbBands
            });
        });
    });

    app.get("/bands/a-z", function(req, res) {
        db.Band
            .findAll({
                order: [
                    ["bandName", "ASC"]
                ]
            })
            .then(function(dbBands) {
                let bands = [];
                for (let i = 0; i < dbBands.length; i++) {
                    bands.push(dbBands[i])
                }
                res.render("a-z", {
                    bandName: bands
                });
            });
    });

    app.get("/bands/bygenre", function(req, res) {
        db.Band.findAll({ where: { bandGenre: "Hip-Hop/R&B" } })
            .then(function(allHipHop) {
                let hipHopBands = [];
                for (let i = 0; i < allHipHop.length; i++) {
                    hipHopBands.push(allHipHop[i])
                }

                db.Band.findAll({ where: { bandGenre: "Jazz" } })
                    .then(function(allJazz) {
                        let jazzBands = [];
                        for (let i = 0; i < allJazz.length; i++) {
                            jazzBands.push(allJazz[i])
                        }

                        db.Band.findAll({ where: { bandGenre: "Pop" } })
                            .then(function(allPop) {
                                let popBands = [];
                                for (let i = 0; i < allPop.length; i++) {
                                    popBands.push(allPop[i])
                                }

                                db.Band.findAll({ where: { bandGenre: "Rock" } })
                                    .then(function(allRock) {
                                        let rockBands = [];
                                        for (let i = 0; i < allRock.length; i++) {
                                            rockBands.push(allRock[i])
                                        }

                                        res.render("bygenre", {
                                            hipHopBands: hipHopBands,
                                            jazzBands: jazzBands,
                                            popBands: popBands,
                                            rockBands: rockBands
                                        })
                                    });
                            });
                    });
            });
    });

    app.get("/bands/:bandName", function(req, res) {
        db.Band
            .findOne({
                where: { bandName: req.params.bandName },
                include: [
                    { model: db.Discog },
                    { model: db.Tours }
                ]
            })
            .then(function(dbBands) {
                if (dbBands === null || db.Discogs === null) {
                    res.render("404");
                } else {

                    let albumObj = [];

                    for (let i = 0; i < dbBands.Discogs.length; i++) {
                        let albumInfo = {};

                        albumInfo["discTitle"] = dbBands.Discogs[i].discTitle;
                        albumInfo["discYear"] = dbBands.Discogs[i].discYear;
                        albumInfo["discTracks"] = dbBands.Discogs[i].discTracks;

                        albumObj.push(albumInfo);
                    }

                    let toursObj = []

                    for (let i = 0; i < dbBands.Tours.length; i++) {
                        let tourInfo = {};

                        tourInfo["tourVenue"] = dbBands.Tours[i].tourVenue;
                        tourInfo["tourCity"] = dbBands.Tours[i].tourCity;
                        tourInfo["tourState"] = dbBands.Tours[i].tourState;
                        tourInfo["tourDate"] = dbBands.Tours[i].tourDate;
                        tourInfo["tourTime"] = dbBands.Tours[i].tourTime;

                        toursObj.push(tourInfo);
                    }

                    res.render("dbbandpage", {
                        bandName: dbBands.bandName,
                        bandPhotoURL: dbBands.bandPhotoURL,
                        bandHometown: dbBands.bandHometown,
                        bandGenre: dbBands.bandGenre,
                        bandBio: dbBands.bandBio,
                        albums: albumObj,
                        tours: toursObj
                    });
                    console.log(toursObj);
                }
            });
    });

    // // Load example page and pass in an example by id
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

    app.get("/bandregister", function(req, res) {
        db.accountType
            .findAll({
                attributes: ["displayName"],
                raw: true
            })
            .then(function(displayNames) {
                let accountTypes = [];
                for (let i = 0; i < displayNames.length; i++) {
                    accountTypes.push(displayNames[i])
                }

                res.render("bandregister", {
                    bandType: accountTypes[0].displayName,
                    fanType: accountTypes[1].displayName
                })
            });
    });

    app.get("/newband", function(req, res) {
        res.render("newband");
    });

    app.get("/fanlogin", function(req, res) {
        res.render("fanlogin");
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};