function signuppage() {
  window.location.href = "signup.html";
}

var loginInfo = JSON.parse(localStorage.getItem("loginInfo")) || [];

document.querySelector(".login-btn").addEventListener("click", function () {
  var errorBox = document.querySelector(".error-box");
  var emailErr = document.querySelector(".email-error");
  var passErr = document.querySelector(".pass-error");
  var wrongCredentials = document.querySelector(".wrong-credentails");

  var email = document.querySelector("#email").value;
  var pass = document.querySelector("#password").value;

  if (email.length && pass.length) {
    var check = true;
    var flag = 0;

    loginInfo.map(function (elem) {
      if (elem.email === email && elem.password === pass) {
        errorBox.style.display = "none";
        emailErr.style.display = "none";
        passErr.style.display = "none";
        flag = 1;
        check = true;
        alert("Signed in successfully");
        localStorage.setItem("userName", JSON.stringify(elem.name));
        window.location.href = "afterSignIn.html";
      } else {
        if (flag !== 1) {
          check = false;
        }
      }
    });
    if (!check) {
      errorBox.style.display = "block";
      emailErr.style.display = "none";
      passErr.style.display = "none";
      wrongCredentials.style.display = "block";
    }
  } else {
    if (!email.length && !pass.length) {
      //alert(please enter all the fields)
      errorBox.style.display = "block";
      emailErr.style.display = "block";
      passErr.style.display = "block";
    } else if (!email.length) {
      //alert(please enter your name)
      errorBox.style.display = "block";
      emailErr.style.display = "block";
      passErr.style.display = "none";
    } else {
      //alert(please enter your password)
      errorBox.style.display = "block";
      emailErr.style.display = "none";
      passErr.style.display = "block";
    }
  }
});
