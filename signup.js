function signinpage(){
    window.location.href="signin.html";
}


var createAccBtn = document.querySelector(".create-account-btn");
var loginInfo = JSON.parse(localStorage.getItem("loginInfo")) || [];
createAccBtn.addEventListener("click", function(){
    var errorBox = document.querySelector(".error-box");
    var nameErr = document.querySelector(".name-error");
    var emailErr = document.querySelector(".email-error");
    var passErr = document.querySelector(".pass-error");
    var repassErr = document.querySelector(".re-pass-error");
    var passShortErr = document.querySelector(".pass-short-error");
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;
    var reEnterPass = document.querySelector("#re-enter-pass").value

    if (name.length && email.length && password.length && reEnterPass.length) {
        if (password.length < 6) {
        //alert('Your Password is too short')
        errorBox.style.display = "block";
        nameErr.style.display = "none";
        emailErr.style.display = "none";
        passErr.style.display = "none";
        repassErr.style.display = "none";
        passShortErr.style.display = "block";
        } 
        else if (reEnterPass !== password) {
        //alert('Password must match')
        errorBox.style.display = "block";
        nameErr.style.display = "none";
        emailErr.style.display = "none";
        passErr.style.display = "none";
        repassErr.style.display = "block";
        passShortErr.style.display = "none";
        } 
        else {
        var obj = {name: name, email: email, password: password};
        loginInfo.push(obj);
        localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        alert("Account Created Succesfully");
        window.location.href = "signin.html";
        name.value = '';
        email.value = '';
        password.value='';
        reEnterPass.value='';
        }
    }
    else if (
        !name.length &&
        !email.length &&
        !password.length &&
        !reEnterPass.length
        ) {
        // alert(please fill up all the details)
        errorBox.style.display = "block";
        nameErr.style.display = "block";
        emailErr.style.display = "block";
        passErr.style.display = "block";
        passShortErr.style.display = "none";
    } 
    else if (name.length === 0) {
        // alert(please enter your name)
        errorBox.style.display = "block"; 
        nameErr.style.display = "none";
        emailErr.style.display = "block";
        passErr.style.display = "none";
        repassErr.style.display = "none";
        passShortErr.style.display = "none";
    }
    else if (email.length === 0) {
        // alert(please enter your email)
        errorBox.style.display = "block";
        nameErr.style.display = "none";
        emailErr.style.display = "block";
        passErr.style.display = "none";
        repassErr.style.display = "none";
        passShortErr.style.display = "none";
    } 
    else if (password.length === 0) {
        // alert(please enter your password)
        errorBox.style.display = "block";
        nameErr.style.display = "none";
        emailErr.style.display = "none";
        passErr.style.display = "block";
        repassErr.style.display = "none";
        passShortErr.style.display = "none";
    } 
    else if (reEnterPass === 0) {
        // alert(password must match)
        errorBox.style.display = "block";
        nameErr.style.display = "none";
        emailErr.style.display = "none";
        passErr.style.display = "none";
        repassErr.style.display = "block";
        passShortErr.style.display = "none";
    }
    else{
        alert("please fill all the fields")
    }
        
})
