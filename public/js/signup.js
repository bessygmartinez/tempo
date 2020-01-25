$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form#registerBand");
    var firstNameInput = $("input#firstName");
    var lastNameInput = $("input#lastName");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");
    var accountTypeInput = $("input#accountType");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", function(event) {

        event.preventDefault();
        console.log("register button clicked");
        var userData = {
            firstName: firstNameInput.val(),
            lastName: lastNameInput.val(),
            email: emailInput.val(),
            password: passwordInput.val(),
            accountType: accountTypeInput.val()
        };
        console.log(userData);
        if (!userData.email || !userData.password) {
            res.render("/bandregister")
            return;
        };

        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        // emailInput.val("");
        // passwordInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        $.post("/bandregister", userData).then(function(data) {
            alert("post");
            window.location.replace(data);
            // If there's an error, handle it by throwing up a boostrap alert
        }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});