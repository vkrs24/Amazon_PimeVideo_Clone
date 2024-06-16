var userName = JSON.parse(localStorage.getItem("userName")) || "Dipankar";
document.querySelector(
  "#userName"
).innerHTML = `${userName} <i class="fas fa-caret-down arrowDown langBtn"></i>`;
function subscription(duration) {
  if (duration === "freeSubscription") {
    window.location.href = "freesubscription.html";
  } else if (duration === "annualSubscription") {
    window.location.href = "annualsubscription.html";
  } else if (duration === "quaterlySubscription") {
    window.location.href = "quaterlySubscription.html";
  } else if (duration === "monthlySubscription") {
    window.location.href = "monthlysubscription.html";
  }
}
