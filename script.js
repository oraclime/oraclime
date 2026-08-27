/* =====================================================
   ORACLIME WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= CONTACT FORM ================= */

function sendRequest(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone) {
    alert("Please enter your name/company and phone number.");
    return;
  }

  /*
    IMPORTANT:
    Replace this number with the official ORACLIME
    WhatsApp business number before launching.

    Format:
    Country code + number
    Example: 919876543210
  */

  const whatsappNumber = "919999999999";

  const whatsappMessage =
    "Hello ORACLIME,%0A%0A" +
    "I need technical service support.%0A%0A" +
    "Name / Company: " +
    encodeURIComponent(name) +
    "%0A" +
    "Phone: " +
    encodeURIComponent(phone) +
    "%0A" +
    "Service: " +
    encodeURIComponent(service) +
    "%0A" +
    "Requirement: " +
    encodeURIComponent(message || "Not specified");

  const whatsappURL =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    whatsappMessage;

  window.open(whatsappURL, "_blank");

}


/* ================= CURRENT YEAR ================= */

document.addEventListener("DOMContentLoaded", function () {

  const yearElements = document.querySelectorAll(
    "[data-current-year]"
  );

  const currentYear = new Date().getFullYear();

  yearElements.forEach(function (element) {
    element.textContent = currentYear;
  });

});


/* ================= SMOOTH NAVIGATION ================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetID = this.getAttribute("href");

    if (
      targetID === "#" ||
      targetID.length === 0
    ) {
      return;
    }

    const target = document.querySelector(targetID);

    if (!target) {
      return;
    }

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ================= BUTTON FEEDBACK ================= */

document.querySelectorAll(".button").forEach(function (button) {

  button.addEventListener("click", function () {

    this.classList.add("button-clicked");

    setTimeout(() => {
      this.classList.remove("button-clicked");
    }, 250);

  });

});


/* ================= FORM INPUT FEEDBACK ================= */

const formInputs = document.querySelectorAll(
  ".contact-form input, .contact-form select, .contact-form textarea"
);

formInputs.forEach(function (input) {

  input.addEventListener("focus", function () {
    this.parentElement.classList.add("input-active");
  });

  input.addEventListener("blur", function () {
    this.parentElement.classList.remove("input-active");
  });

});


/* ================= CONSOLE MESSAGE ================= */

console.log(
  "%cORACLIME",
  "font-size: 24px; font-weight: bold;"
);

console.log(
  "Technical services, coordinated."
);
