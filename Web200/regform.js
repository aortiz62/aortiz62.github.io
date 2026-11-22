var form = document.getElementById("myform");

form.onsubmit = function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameerr = document.getElementById("nameerr");
    var emailerr = document.getElementById("emailerr");

    nameerr.innerHTML = "";
    emailerr.innerHTML = "";

    var valid = true;

    if (name == "") {
        nameerr.innerHTML = "Name is required.";
        valid = false;
    }

    if (email == "") {
        emailerr.innerHTML = "Email is required.";
        valid = false;
        } else if (!email.includes("@")) {
            emailerr.innerHTML = "enter a valid email";
            valid = false;
        }
    };