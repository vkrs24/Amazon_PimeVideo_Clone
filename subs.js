function AfterSignIn() {
  window.location.href = "aftersignin.html";
}

function pay(value) {
  if (value === 0) {
    document.querySelector(".upiOption").style.display = "none";
    document.querySelector(".upi").style.background = "";
    document.querySelector(".netbanking").style.background = "";
    document.querySelector(".netBankingOption").style.display = "none";
    document.querySelector(".debitContainer").style.display = "block";
    document.querySelector(".debit").style.background = "#eff0f3";
  } else if (value === 1) {
    document.querySelector(".upioption").style.display = "none";
    document.querySelector(".upi").style.background = "";
    document.querySelector(".netbanking").style.background = "#fcf5ee";
    document.querySelector(".netBankingOption").style.display = "block";
    document.querySelector(".debitContainer").style.display = "none";
    document.querySelector(".debit").style.background = "";
  } else if (value === 2) {
    document.querySelector(".upiOption").style.display = "block";
    document.querySelector(".upi").style.background = "#eff";
    document.querySelector(".netbanking").style.background = "#fcf5ee";
    document.querySelector(".netBankingOption").style.display = "block";
    document.querySelector(".debitContainer").style.display = "none";
    document.querySelector(".debit").style.background = "";
  }
}

document.querySelector("#promoCode").addEventListener("click", function () {
  document.querySelector(".promoInput").style.display = "block";
  document
    .querySelector(".caretDown")
    .setAttribute("class", "fas fa-angle-up caretDown");
});
document.querySelector("#promoCode").addEventListener("dblclick", function () {
  document.querySelector(".promoInput").style.display = "none";
  document
    .querySelector(".caretDown")
    .setAttribute("class", "fas fa-angle-down caretDown");
  I;
});

//Enabling continue button after clicking on upi verify

document.querySelector("#verify").addEventListener("click", function () {
  var upiID = document.querySelector("#upiID").value;
  if (upiID === "1234567890@upi" || upiID === "abcdef01@oksvi") {
    alert(`${upiID}) is Verified`);
    var continueBtn = document.querySelector(".continueBtn");
    continueBtn.style.opacity = "1";
    continueBtn.style.color = "#fff";
    continueBtn.removeAttribute("disabled");
  } else {
    alert(`${upiID}) is Invalid`);
  }
});

//Enabling continue button after adding debit/credit card

document.querySelector("#addDebitCard").addEventListener("click", function () {
  var userName = JSON.parse(localStorage.getItem("userName")) || "";
  var cardName = document.querySelector("#cardName").value;
  var cardNumber = document.querySelector("#cardNumber").value;
  var expiryDate = document.querySelector("#expiryDate").value;
  if (
    cardNumber === "824852081780" &&
    cardName === "democardone" &&
    expiryDate === "2024-10"
  ) {
    alert(`${userName} your card ${cardNumber} is verified`);
    var continueBtn = document.querySelector(".continueBtn");
    continueBtn.style.opacity = "1";
    continueBtn.style.display = "#fff";
    continueBtn.removeAttribute("disabled");
  } else {
    alert(`${userName} your card ${cardNumber} is Invalid`);
    I;
  }
});

//promocode Check

document.querySelector("#promoCheck").addEventListener("click", function () {
  var promoCodeInput = document.querySelector("#promoCodeInput").value;
  if (promoCodeInput) {
    if (promoCodeInput === "code114") {
      alert(`You'll get 15 Days extra Subscription. Complete Your Payment!!!`);
    } else {
      alert(`Promocode is Invalid`);
    }
  } else {
    alert("Enter Promo Code");
  }
});

//conitnue button for otp

function proceed() {
  var userName = JSON.parse(localStorage.getItem("userName")) || "";
  var otp = prompt("Enter Your OTP");
  while (otp !== "7894561230") {
    if (otp === "78945") {
      alert(`
    Payment is Successfull!! We have recieved your payment ${userName}, Thank you and Enjoy watching amazon prime`);
      window.location.href = "mainhome.html";
      break;
    } else if (otp == "null" || otp == "" || null) {
      break;
    } else {
      alert("Wrong OTP");
      var otp = prompt("Enter Your OTP");
    }
  }
}
