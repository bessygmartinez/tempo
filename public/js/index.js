// Get references to page elements
var $submitBtn = $("#submitNewband");
var $updateBtn = $("#updateBand");
var $deleteBtn = $("#deleteBand");
var $tourdatesBtn = $("#tour-dates-btn");
var bandName = $("#bandName");
var bandPhotoURL = $("#bandPhotoURL");
var bandHometown = $("#bandHometown");
var bandGenre = $("#bandGenre");
var bandBio = $("#bandBio");
var discTitle1 = $("#discTitle1");
var discYear1 = $("#discYear1");
var discTracks1 = $("#discTracks1");
var tourVenue1 = $("#tourVenue1");
var tourCity1 = $("#tourCity1");
var tourState1 = $("#tourState1");
var tourDate1 = $("#tourDate1");
var tourTime1 = $("#tourTime1");
var bandId = $("#bandId");

// The API object contains methods for each kind of request we'll make
var API = {
    saveBand: function(band) {
        $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/bands",
            data: JSON.stringify(band)
        });
    },
    saveDiscog: function(discog) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/discogs",
            data: JSON.stringify(discog)
        });
    },
    saveTours: function(tours) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/tours",
            data: JSON.stringify(tours)
        });
    },
    getBands: function() {
        return $.ajax({
            url: "/api/bands",
            type: "GET"
        });
    },
    deleteBand: function(bandId) {
        return $.ajax({
            url: "/bands" + bandId,
            type: "DELETE"
        });
    }
};

// refreshExamples gets new examples from the db and repopulates the list
// var refreshBands = function() {
//   API.getBand().then(function(data) {
//     var $bands = data.map(function(band) {
//       var $a = $("<a>")
//         .text(band.text)
//         .attr("href", "/api/bands/" + band.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": band.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     bandList.empty();
//     bandList.append($bands);
//   });
// };

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
    event.preventDefault();
    var newBand = {
        bandName: bandName.val().trim(),
        bandPhotoURL: bandPhotoURL.val().trim(),
        bandHometown: bandHometown.val().trim(),
        bandGenre: bandGenre.val().trim(),
        bandBio: bandBio.val().trim()
    };
    console.log(newBand);

    var newDiscog1 = {
        discTitle: discTitle1.val().trim(),
        discYear: discYear1.val().trim(),
        discTracks: discTracks1.val().trim(),
    };
    console.log(newDiscog1);
    var newTours1 = {
        tourVenue: tourVenue1.val().trim(),
        tourCity: tourCity1.val().trim(),
        tourState: tourState1.val().trim(),
        tourDate: tourDate1.val().trim(),
        tourTime: tourTime1.val().trim(),
    };
    console.log(newTours1);

    if (!bandName.text) {
        alert("You must enter a name for your band!");
        return;
    }

    API.saveBand(newBand);
    // .then(function() {
    //   refreshBands();
    // });

    API.saveDiscog(newDiscog1);
    // .then(function() {
    //   refreshBands();
    // });

    API.saveTours(newTours1);
    // .then(function() {
    //   refreshBands();
    // });

    API.deleteBand(bandId);
    // .then(function() {
    //   refreshBands();
    // });

    bandName.val("");
    bandPhotoURL.val("");
    bandHometown.val("");
    bandGenre.val("");
    bandBio.val("");
};

// handleDeleteBtnClick is called when a bands delete button is clicked
// Remove the band from the db and refresh the list
var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteBand(idToDelete).then(function() {
        refreshBands();
    });
};

var modalToggle = function() {
    $("#tour-dates").modal("toggle");
    event.preventDefault();

    var lastBandId;

    var newBand = {
        bandName: bandName.val().trim(),
        bandPhotoURL: bandPhotoURL.val().trim(),
        bandHometown: bandHometown.val().trim(),
        bandGenre: bandGenre.val().trim(),
        bandBio: bandBio.val().trim()
    };

    var newDiscog1 = {
        discTitle: discTitle1.val().trim(),
        discYear: discYear1.val().trim(),
        discTracks: discTracks1.val().trim()
    };

    var newTours1 = {
        tourVenue: tourVenue1.val().trim(),
        tourCity: tourCity1.val().trim(),
        tourState: tourState1.val().trim(),
        tourDate: tourDate1.val().trim(),
        tourTime: tourTime1.val().trim(),
        bandId: lastBandId
    };

    API.saveBand(newBand);
    API.getBands().then(function(bands) {
        console.log(bands);
        let bandIdsArr = [];

        for (let i = 0; i < bands.length; i++) {
            bandIdsArr.push(bands[i].bandId)
        }
        console.log(bandIdsArr);

        let lastBand = bandIdsArr[bandIdsArr.length - 1];
        console.log(lastBand)
        lastBandId = lastBand;
        console.log(lastBandId);

        newDiscog1.bandId = lastBandId;

        API.saveDiscog(newDiscog1);

    });

    if (!bandName.text) {
        alert("You must enter a name for your band!");
        return;
    }

    // API.saveTours(newTours1);

    // API.saveDiscog(newDiscog1);
    // // // .then(function() {
    // // //   refreshBands();
    // // // });

    // API.saveTours(newTours1);
    // // // .then(function() {
    // // //   refreshBands();
    // // // });

    bandName.val("");
    bandPhotoURL.val("");
    bandHometown.val("");
    bandGenre.val("");
    bandBio.val("");
    discTitle1.val("");
    discYear1.val("");
    discTracks1.val("");
    tourVenue1.val("");
    tourCity1.val("");
    tourState1.val("");
    tourDate1.val("");
    tourTime1.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

var modalToggle = function() {
    $("#tour-dates").modal("toggle");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$deleteBtn.on("click", ".delete", handleDeleteBtnClick);

//Even listeners for tour dates modal
$tourdatesBtn.on("click", modalToggle);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

//Even listeners for tour dates modal
$tourdatesBtn.on("click", modalToggle);