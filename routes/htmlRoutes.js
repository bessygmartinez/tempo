var db = require("../models");
var Sequelize = require("sequelize");


module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Bands.findOne({
            order: Sequelize.literal('rand()'),
            limit: 1,
            include: [
                { model: db.Discogs },
                { model: db.Tours }
            ]
        }).then(function(dbBands) {
            res.render("index", {
                bandName: dbBands.bandName,
                bandPhotoURL: dbBands.bandPhotoURL,
                bandHometown: dbBands.bandHometown,
                bandGenre: dbBands.bandGenre,
                bandBio: dbBands.bandBio,
                bandId: dbBands.bandId
                    // link to band info page when you click on band name--> takes you over to their band info page

            });
        });
    });

    app.get("/bands/a-z", function(req, res) {
        db.Bands
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
        db.Bands.findAll({
                where: { bandGenre: "Electronic" },
                order: [
                    ["bandName", "ASC"]
                ]
            })
            .then(function(allElectronic) {
                let electronicBands = [];
                for (let i = 0; i < allElectronic.length; i++) {
                    electronicBands.push(allElectronic[i])
                }

                db.Bands.findAll({
                        where: { bandGenre: "Hip-Hop/R&B" },
                        order: [
                            ["bandName", "ASC"]
                        ]
                    })
                    .then(function(allHipHop) {
                        let hipHopBands = [];
                        for (let i = 0; i < allHipHop.length; i++) {
                            hipHopBands.push(allHipHop[i])
                        }

                        db.Bands.findAll({
                                where: { bandGenre: "Jazz" },
                                order: [
                                    ["bandName", "ASC"]
                                ]
                            })
                            .then(function(allJazz) {
                                let jazzBands = [];
                                for (let i = 0; i < allJazz.length; i++) {
                                    jazzBands.push(allJazz[i])
                                }

                                db.Bands.findAll({
                                        where: { bandGenre: "Pop" },
                                        order: [
                                            ["bandName", "ASC"]
                                        ]
                                    })
                                    .then(function(allPop) {
                                        let popBands = [];
                                        for (let i = 0; i < allPop.length; i++) {
                                            popBands.push(allPop[i])
                                        }

                                        db.Bands.findAll({
                                                where: { bandGenre: "Rock" },
                                                order: [
                                                    ["bandName", "ASC"]
                                                ]
                                            })
                                            .then(function(allRock) {
                                                let rockBands = [];
                                                for (let i = 0; i < allRock.length; i++) {
                                                    rockBands.push(allRock[i])
                                                }

                                                res.render("bygenre", {
                                                    hipHopBands: hipHopBands,
                                                    jazzBands: jazzBands,
                                                    popBands: popBands,
                                                    rockBands: rockBands,
                                                    electronicBands: electronicBands
                                                })
                                            });
                                    });
                            });
                    });
            });
    });
    // app.get("/bands/:bandName", function(req, res) {
    app.get("/bands/:bandId", function(req, res) {
        db.Bands
            .findOne({
                // where: { bandName: req.params.bandName },
                where: { bandId: req.params.bandId },

                include: [
                    { model: db.Discogs },
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
                        tours: toursObj,
                        bandId: dbBands.bandId
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

    // app.get("/updateband/:bandId", function(req, res) {
    //     res.render("updateband");
    // });

    app.get("/updateband/:bandId", function(req, res) {
        db.Bands
            .findOne({
                where: { bandId: req.params.bandId },
                include: [
                    { model: db.Discogs },
                    { model: db.Tours }
                ]
            })
            .then(function(dbBands) {
                console.log(dbBands);
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

                    res.render("updateband", {
                        bandName: dbBands.bandName,
                        bandPhotoURL: dbBands.bandPhotoURL,
                        bandHometown: dbBands.bandHometown,
                        bandGenre: dbBands.bandGenre,
                        bandBio: dbBands.bandBio,
                        albums: albumObj,
                        tours: toursObj,
                        bandId: dbBands.bandId
                    });
                    console.log(toursObj);
                }
            });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};