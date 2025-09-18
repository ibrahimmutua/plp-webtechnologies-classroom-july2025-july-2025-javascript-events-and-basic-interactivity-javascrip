// ============================
// Part 1: Event Handling
// ============================

// 1. Greet Button
document.getElementById("btnGreet").addEventListener("click", function() {
  let name = prompt("What is your name?");
  if (name) {
    document.getElementById("greeting").textContent = "Hello, " + name + "! 👋";
  } else {
    document.getElementById("greeting").textContent = "Hello, stranger!";
  }
});

// 2. Change Background Color Button
document.getElementById("btnChangeColor").addEventListener("click", function() {
  let colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

// ============================
// Part 2: Interactive Features
// ============================

// Feature 1: Show current date and time on button click
let showTimeBtn = document.createElement("button");
showTimeBtn.textContent = "Show Current Time";
document.body.appendChild(showTimeBtn);

let timeDisplay = document.createElement("p");
document.body.appendChild(timeDisplay);

showTimeBtn.addEventListener("click", function() {
  let now = new Date();
  timeDisplay.textContent = "Current time: " + now.toLocaleTimeString();
});

// Feature 2: Highlight all input fields on focus
let inputs = document.querySelectorAll("input");
inputs.forEach(function(input) {
  input.addEventListener("focus", function() {
    input.style.backgroundColor = "#ffffcc";
  });
  input.addEventListener("blur", function() {
    input.style.backgroundColor = "";
  });
});

// ============================
// Part 3: Custom Form Validation
// ============================

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = "";

  // Validate Name
  if (name === "") {
    message += "Name cannot be empty. ";
  }

  // Validate Email (basic check for @)
  if (email === "" || !email.includes("@")) {
    message += "Please enter a valid email. ";
  }

  // Show validation result
  let formMessage = document.getElementById("formMessage");
  if (message === "") {
    formMessage.style.color = "green";
    formMessage.textContent = "Form submitted successfully!";
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = message;
  }
});
