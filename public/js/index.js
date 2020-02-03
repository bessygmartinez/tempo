var $submitBtn = $("#submitNewband");
var $tourdatesBtn = $("#tour-dates-btn");
var $addBandModal = $("#add-band-modal");
var $updateBand = $("#updateBand");
var $deleteBand = $("#deleteBand");
var $deleteBandModal = $("#delete-band-modal");

var bandName = $("#bandName");
var bandPhotoURL = $("#bandPhotoURL");
var bandHometown = $("#bandHometown");
var bandGenre = $("#bandGenre");
var bandBio = $("#bandBio");

var discTitle1 = $("#discTitle1");
var discYear1 = $("#discYear1");
var discTracks1 = $("#discTracks1");
var discTitle2 = $("#discTitle2");
var discYear2 = $("#discYear2");
var discTracks2 = $("#discTracks2");
var discTitle3 = $("#discTitle3");
var discYear3 = $("#discYear3");
var discTracks3 = $("#discTracks3");

var tourVenue1 = $("#tourVenue1");
var tourCity1 = $("#tourCity1");
var tourState1 = $("#tourState1");
var tourDate1 = $("#tourDate1");
var tourTime1 = $("#tourTime1");
var tourVenue2 = $("#tourVenue2");
var tourCity2 = $("#tourCity2");
var tourState2 = $("#tourState2");
var tourDate2 = $("#tourDate2");
var tourTime2 = $("#tourTime2");
var tourVenue3 = $("#tourVenue3");
var tourCity3 = $("#tourCity3");
var tourState3 = $("#tourState3");
var tourDate3 = $("#tourDate3");
var tourTime3 = $("#tourTime3");

var newBandObj = [];

var newBandId;

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
        console.log("RUN");
        console.log(bandId);
        return $.ajax({
            url: "/api/bands/" + bandId,
            type: "DELETE",
            success: function() {
                window.location = "/"
            }
        });
    }
};

// handleFormSubmit is called whenever we submit a new band
// Save the new band to the db and send to band page
var handleFormSubmit = function(event) {
    console.log("you hit the FE handle form submit function");
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

    var newDiscog2 = {
        discTitle: discTitle2.val().trim(),
        discYear: discYear2.val().trim(),
        discTracks: discTracks2.val().trim()
    };

    var newDiscog3 = {
        discTitle: discTitle3.val().trim(),
        discYear: discYear3.val().trim(),
        discTracks: discTracks3.val().trim()
    };

    var newTours1 = {
        tourVenue: tourVenue1.val().trim(),
        tourCity: tourCity1.val().trim(),
        tourState: tourState1.val().trim(),
        tourDate: tourDate1.val().trim(),
        tourTime: tourTime1.val().trim(),
    };

    var newTours2 = {
        tourVenue: tourVenue2.val().trim(),
        tourCity: tourCity2.val().trim(),
        tourState: tourState2.val().trim(),
        tourDate: tourDate2.val().trim(),
        tourTime: tourTime2.val().trim(),
    };

    var newTours3 = {
        tourVenue: tourVenue3.val().trim(),
        tourCity: tourCity3.val().trim(),
        tourState: tourState3.val().trim(),
        tourDate: tourDate3.val().trim(),
        tourTime: tourTime3.val().trim(),
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

        newBand.bandId = lastBandId;

        newDiscog1.bandId = lastBandId;
        newDiscog2.bandId = lastBandId;
        newDiscog3.bandId = lastBandId;

        newTours1.bandId = lastBandId;
        newTours2.bandId = lastBandId;
        newTours3.bandId = lastBandId;

        newBandId = lastBandId;

        if (newDiscog1.discTitle === "") {
            console.log("No Discog1")
        } else {
            API.saveDiscog(newDiscog1);
        }

        if (newDiscog2.discTitle === "") {
            console.log("No Discog2")
        } else {
            API.saveDiscog(newDiscog2);
        }

        if (newDiscog3.discTitle === "") {
            console.log("No Discog3")
        } else {
            API.saveDiscog(newDiscog3);
        }

        if (newTours1.tourVenue === "") {
            console.log("No Tours1")
        } else {
            API.saveTours(newTours1);
        }

        if (newTours2.tourVenue === "") {
            console.log("No Tours2")
        } else {
            API.saveTours(newTours2);
        }

        if (newTours3.tourVenue === "") {
            console.log("No Tours3")
        } else {
            API.saveTours(newTours3);
        }

        newBandObj.push(newBand);
        console.log(newBandObj);
    });

    if (!bandName.text) {
        alert("You must enter a name for your band!");
        return;
    }

    bandName.val("");
    bandPhotoURL.val("");
    bandHometown.val("");
    bandGenre.val("");
    bandBio.val("");

    discTitle1.val("");
    discYear1.val("");
    discTracks1.val("");
    discTitle2.val("");
    discYear2.val("");
    discTracks2.val("");
    discTitle3.val("");
    discYear3.val("");
    discTracks3.val("");

    tourVenue1.val("");
    tourCity1.val("");
    tourState1.val("");
    tourDate1.val("");
    tourTime1.val("");

    var sucessToggle = function() {
        $("#bandSubmitSuccess").modal("toggle");
    };
    sucessToggle();
};
// handleDeleteBtnClick is called when an band's delete button is clicked
//Remove the band from the db and go to index page
var handleDeleteBtnClick = function(bandId) {
    event.preventDefault();
    console.log("you hit the FE delete btn function");
    // bandId = $("#deleteBand").val();
    bandId = $(this).attr("value");
    console.log(bandId);
    var idToDelete = $(this)
        .attr("value");
    console.log(idToDelete);

    API.deleteBand(idToDelete);
};

var modalToggle = function() {
    $("#tour-dates").modal("toggle");
};

var deleteToggle = function() {
    event.preventDefault();
    $("#bandDeleteSuccess").modal("toggle");
};

// Add event listeners to the submit, update and delete buttons
$submitBtn.on("click", handleFormSubmit);

$updateBand.on("click", handleFormSubmit);

// $deleteBand.on("click", ".delete", handleDeleteBtnClick);
$deleteBand.on("click",  deleteToggle);

$deleteBandModal.on("click", handleDeleteBtnClick);

//Even listeners for tour dates modal
$tourdatesBtn.on("click", modalToggle);

$('#bandName').keyup(function() {
    $('#newBandName').text($(this).val());
});

$addBandModal.on("click", function() {
    window.location = "/bands/" + newBandObj[0].bandId;
});
