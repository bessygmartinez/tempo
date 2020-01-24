let db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // Get all bands
    app.get("/bands", function(req, res) {
        db.Band.findAll({}).then(function(dbBands) {
            res.json(dbBands);
        });
    });

    //Create a new band
    app.post("/bands", function(req, res) {
        db.Band.create(req.body).then(function(dbBand) {
            res.json(dbBand);
        });
    });

    //login
    app.post("/bandlogin", passport.authenticate("local"), function(req, res) {
        res.json("/dbbandpage");
    });

    //register
    app.post("/bandregister", function(req, res) {
        console.log("posting: ");
        console.log(req.body);
        db.User.create(req.body).then(function() {
            res.redirect("/dbbandpage");
        }).catch(function(err) {
            res.json(err);
        });
    });

    // // Route for logging user out
    // app.get("/logout", function(req, res) {
    //     req.logout();
    //     res.redirect("/");
    // });
    // //
    // Route for getting some data about our user to be used client side
    // app.get("/api/user_data", function(req, res) {
    //     if (!req.user) {
    //         // The user is not logged in, send back an empty object
    //         res.json({});
    //     } else {
    //         // Otherwise send back the user's email and id
    //         // Sending back a password, even a hashed password, isn't a good idea
    //         res.json({
    //             email: req.user.email,
    //             id: req.user.id
    //         });
    //     }
    // });

};