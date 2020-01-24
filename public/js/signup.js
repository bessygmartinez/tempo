$(document).ready(function() {
    // Getting references to our form and input
    var signUpForm = $("form#register");
    var emailInput = $("input#email");
    var passwordInput = $("input#password");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("registerBtn", function(event) {

        event.preventDefault();
        console.log("register button clicked");
        alert("register button clicked");
        var userData = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            email: email.val().trim(),
            password: password.val().trim(),
            accountType: accountType.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        };
        console.log(userData);
        // If we have an email and password, run the signUpUser function
        signUpUser(userData);
        // emailInput.val("");
        // passwordInput.val("");
    });

    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(userData) {
        $.post("/register", userData).then(function(data) {
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