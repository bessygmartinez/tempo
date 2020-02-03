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
                bandId: dbBands.bandId,
                bandName: dbBands.bandName,
                bandPhotoURL: dbBands.bandPhotoURL,
                bandHometown: dbBands.bandHometown,
                bandGenre: dbBands.bandGenre,
                bandBio: dbBands.bandBio,
                // link to band info page when you click on band name--> takes you over to their band info page

            });
        });
    });

    app.get("/bands/a-z", function(req, res) {
        db.Bands.findAll({
                where: {
                    bandName: {
                        [Sequelize.Op.regexp]: ["^[a-e]"]
                    }
                },
                order: [
                    ["bandName", "ASC"]
                ]
            })
            .then(function(allaebands) {
                var aebands = [];
                for (var i = 0; i < allaebands.length; i++) {
                    aebands.push(allaebands[i])
                }

                db.Bands.findAll({
                        where: {
                            bandName: {
                                [Sequelize.Op.regexp]: ["^[f-j]"]
                            }
                        },
                        order: [
                            ["bandName", "ASC"]
                        ]
                    })
                    .then(function(allfjbands) {
                        var fjbands = [];
                        for (var i = 0; i < allfjbands.length; i++) {
                            fjbands.push(allfjbands[i])
                        }

                        db.Bands.findAll({
                                where: {
                                    bandName: {
                                        [Sequelize.Op.regexp]: ["^[k-o]"]
                                    }
                                },
                                order: [
                                    ["bandName", "ASC"]
                                ]
                            })
                            .then(function(allkobands) {
                                var kobands = [];
                                for (var i = 0; i < allkobands.length; i++) {
                                    kobands.push(allkobands[i])
                                }

                                db.Bands.findAll({
                                        where: {
                                            bandName: {
                                                [Sequelize.Op.regexp]: ["^[p-t]"]
                                            }
                                        },
                                        order: [
                                            ["bandName", "ASC"]
                                        ]
                                    })
                                    .then(function(allptbands) {
                                        var ptbands = [];
                                        for (var i = 0; i < allptbands.length; i++) {
                                            ptbands.push(allptbands[i])
                                        }

                                        db.Bands.findAll({
                                                where: {
                                                    bandName: {
                                                        [Sequelize.Op.regexp]: ["^[u-z]"]
                                                    }
                                                },
                                                order: [
                                                    ["bandName", "ASC"]
                                                ]
                                            })
                                            .then(function(alluzbands) {
                                                var uzbands = [];
                                                for (var i = 0; i < alluzbands.length; i++) {
                                                    uzbands.push(alluzbands[i])
                                                }

                                                db.Bands.findAll({
                                                        where: {
                                                            bandName: {
                                                                [Sequelize.Op.regexp]: ["^[0-9!@#$%^&*()_+\-=\[\]{};:\\|,.<>\/?]*$]"]
                                                            }
                                                        },
                                                        order: [
                                                            ["bandName", "ASC"]
                                                        ]
                                                    })
                                                    .then(function(allsymbbands) {
                                                        var symbbands = [];
                                                        for (var i = 0; i < allsymbbands.length; i++) {
                                                            symbbands.push(allsymbbands[i])
                                                        }

                                                        res.render("a-z", {
                                                            aebands: aebands,
                                                            fjbands: fjbands,
                                                            kobands: kobands,
                                                            ptbands: ptbands,
                                                            uzbands: uzbands,
                                                            symbbands: symbbands
                                                        });
                                                    });
                                            });
                                    });
                            });
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
                var electronicBands = [];
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
                        var hipHopBands = [];
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
                                var jazzBands = [];
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
                                        var popBands = [];
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
                                                var rockBands = [];
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

    app.get("/bands/:bandId", function(req, res) {
        db.Bands
            .findOne({
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
                        bandId: dbBands.bandId //added to enable update band button functionality
                    });
                }
            });
    });

    app.get("/about", function(req, res) {
        res.render("about");
    });

    // app.get("/bandlogin", function(req, res) {
    //     res.render("bandlogin");
    // });

    // app.get("/bandregister", function(req, res) {
    //     db.accountType
    //         .findAll({
    //             attributes: ["displayName"],
    //             raw: true
    //         })
    //         .then(function(displayNames) {
    //             let accountTypes = [];
    //             for (let i = 0; i < displayNames.length; i++) {
    //                 accountTypes.push(displayNames[i])
    //             }

    //             res.render("bandregister", {
    //                 bandType: accountTypes[0].displayName,
    //                 fanType: accountTypes[1].displayName
    //             })
    //         });
    // });

    app.get("/newband", function(req, res) {
        console.log("back end GET newband route!");
        res.render("newband");
    });

    //update band route
    app.get("/updateband/:bandId", function(req, res) {
        console.log("back end GET updateband page route!");
        db.Bands
            .findOne({
                where: { bandId: req.params.bandId },
                include: [
                    { model: db.Discogs },
                    { model: db.Tours }
                ]
            })
            .then(function(dbBands) {
                console.log("found band for updateband page");
                if (dbBands === null || db.Discogs === null) {
                    res.render("404");
                } else {

                    let albumObj = [];

                    for (let i = 0; i < dbBands.Discogs.length; i++) {
                        let albumInfo = {};

                        albumInfo["discId"] = dbBands.Discogs[i].discId;
                        albumInfo["discTitle"] = dbBands.Discogs[i].discTitle;
                        albumInfo["discYear"] = dbBands.Discogs[i].discYear;
                        albumInfo["discTracks"] = dbBands.Discogs[i].discTracks;

                        albumObj.push(albumInfo);
                    }

                    let toursObj = []

                    for (let i = 0; i < dbBands.Tours.length; i++) {
                        let tourInfo = {};

                        tourInfo["tourId"] = dbBands.Tours[i].tourId;
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
                }
            });
    });

    // app.get("/fanlogin", function(req, res) {
    //     res.render("fanlogin");
    // });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};