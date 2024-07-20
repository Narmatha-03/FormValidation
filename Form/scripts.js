function validateform(){
    var username = document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username == null || username == "") {
        alert("Please Enter your Username");
        return false;
    }
    if(password == "") {
        alert("Please enter your password");
        return false;
    }
    if(password.length <6){
        alert("Password should be atleast 6 character long");
        return false;
    }
}