// Darkmode Toggle Script
let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// Contact Form Validation Script
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  let valid = true;
  clearErrors();

  if (name === "") {
    showError("name", "Name is required.");
    valid = false;
  } else if (name.length < 2) {
    showError("name", "Name must be at least 2 characters.");
    valid = false;
  }
  if (email === "") {
    showError("email", "Email is required.");
    valid = false;
  } else if (!validateEmail(email)) {
    showError("email", "Please enter a valid email address.");
    valid = false;
  }
  if (message === "") {
    showError("message", "Message is required.");
    valid = false;
  } else if (message.length < 10) {
    showError("message", "Message must be at least 10 characters.");
    valid = false;
  }
  if (valid) {
    document.getElementById("success-message").innerText =
      "Your message has been sent successfully!";
    document.getElementById("contact-form").reset();
  }
}
