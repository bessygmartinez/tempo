var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Hello!",
        example: dbExamples
      });
    });
  });

  app.get("/bands/:name", function(req, res) {
    db.Bands.findOne({ where: { name: req.params.name } }).then(function(dbBands) {
      res.render("dbbandpage", {
        name: dbBands.name,
        photoURL: dbBands.photoURL,
        hometown: dbBands.hometown,
        genre: dbBands.genre,
        bio: dbBands.bio
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.get("/about", function(req, res) {
    res.render("about");
  });

  app.get("/bandlogin", function(req, res) {
    res.render("bandlogin");
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
