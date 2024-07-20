function validateform(){
    var name=document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var email=document.getElementById("email").value;
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var phone=document.getElementById("phone").value;
    var regPhone=/^\d{10}$/;
    var password=document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    
    
    if(name == null || name == "") {
       alert("Name can't be blank");
       return false;
    }
    /*if(name!="/^\w+([\.-]?\w+)*+$/g"){
      alert("Name should be a set of characters");
      return false;
    }*/
    if(username == null || username == "") {
      alert("Please Enter your Username");
      return false;
    }
    if(email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        return false;
    }
    if(phone == "" || !regPhone.test(phone)) {
        window.alert("Please enter valid phone number.");
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
    if(password != confirmPassword) {
        alert("Password mismatched!!")
        return false;
    }
}