// Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
var $submitBtn = $("#submitNewband");
// var $exampleList = $("#example-list");
var $tourdatesBtn = $("#tour-dates-btn");
var bandName = $("#bandName");
var bandPhotoURL = $("#bandPhotoURL");
var bandHometown = $("#bandHometown");
var bandGenre = $("#bandGenre");
var bandBio = $("#bandBio");

// The API object contains methods for each kind of request we'll make
var API = {
    saveBand: function(band) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/bands",
            data: JSON.stringify(band)
        });
    },
    getBand: function() {
        return $.ajax({
            url: "/newband",
            type: "GET"
        });
    },
    deleteBand: function(id) {
        return $.ajax({
            url: "/bands" + id,
            type: "DELETE"
        });
    }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshBands = function() {
    API.getBands().then(function(data) {
        var bands = data.map(function(band) {
            var $a = $("<a>")
                .text(band.text)
                .attr("href", "/band/" + band.id);

            var $li = $("<li>")
                .attr({
                    class: "list-group-item",
                    "data-id": band.id
                })
                .append($a);

            var $button = $("<button>")
                .addClass("btn btn-danger float-right delete")
                .text("ｘ");

            $li.append($button);

            return $li;
        });

        bandList.empty();
        bandList.append(bands);
    });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
    event.preventDefault();
    console.log(bandGenre);
    var newBand = {
        bandName: bandName.val().trim(),
        bandPhotoURL: bandPhotoURL.val().trim(),
        bandHometown: bandHometown.val().trim(),
        bandGenre: bandGenre.val().trim(),
        bandBio: bandBio.val()

    };

    if (!bandName.text) {
        alert("You must enter a name for your band!");
        return;
    }

    API.saveBand(newBand).then(function() {
        refreshBands();
    });

    bandName.val("");
    bandPhotoURL.val("");
    bandHometown.val("");
    bandGenre.val("Rock");
    bandBio.val("");

};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteExample(idToDelete).then(function() {
        refreshExamples();
    });
};

var modalToggle = function() {
  $("#tour-dates").modal("toggle");
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

//Even listeners for tour dates modal
$tourdatesBtn.on("click", modalToggle);
