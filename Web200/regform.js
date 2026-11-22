var form = document.getElementById("myform");

form.onsubmit = function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var nameerr = document.getElementById("nameerr");
    var emailerr = document.getElementById("emailerr");

    nameerr.innerHTML = "";
    emailerr.innerHTML = "";