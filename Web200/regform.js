var form = document.getElementById("myform");

form.onsubmit = function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameerr = document.getElementById("nameerr");
    var emailerr = document.getElementById("emailerr");
    var pass = document.getElementById("pass").value;
    var pass2 = document.getElementById("pass2").value;
    var passerr = document.getElementById("passerr");
    var pass2err = document.getElementById("pass2err");
    var donemsg = document.getElementById("donemsg");

    nameerr.innerHTML = "";
    emailerr.innerHTML = "";
    passerr.innerHTML = "";
    pass2err.innerHTML = "";
    donemsg.innerHTML = "";

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

    var hasNumber = false;
    var numbers = "0123456789";

    for (var i = 0; i < pass.length; i++) {
        if (numbers.includes(pass[i])) {
            hasNumber = true;
            break;
        }
    }

    if (pass == "") {
        passerr.innerHTML = "Password is required.";
        valid = false;
    }   else if (pass.length < 8) {
        passerr.innerHTML = "Password must be at least 8 characters long.";
        valid = false;
    }  
   