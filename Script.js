// Show a playful but professional sign-up alert
function showSignupAlert() {
  alert("🚀 Sign-Up Coming Soon!\n\nWe're building a powerful feature so you can enroll, save your progress, and get certified. Stay tuned!");

  setTimeout(() => {
    alert("💳 Also, secure Login & Payment gateway are under integration.");
  }, 1000);
}

// Dynamic greeting based on time
function greetUserByTime() {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting = "Good Afternoon 🌤️";
  } else {
    greeting = "Good Evening 🌙";
  }

  const greetingElement = document.getElementById("greeting-time");
  if (greetingElement) {
    greetingElement.textContent = greeting;
  }
}

// Toggle dark mode (future feature)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const mode = document.body.classList.contains("dark-mode") ? "Dark Mode 🌙" : "Light Mode ☀️";
  alert(`You’ve switched to ${mode}`);
}

// Simulated page loader (for future polish)
function showPageLoader() {
  const loader = document.createElement("div");
  loader.className = "loader-overlay";
  loader.innerHTML = `
    <div class="loader">
      <div class="spinner"></div>
      <p>Loading Skillsparkz content...</p>
    </div>
  `;
  document.body.appendChild(loader);
  setTimeout(() => loader.remove(), 2000); // simulate 2s load
}

// Run on load
window.onload = function () {
  greetUserByTime();
  // showPageLoader(); // Uncomment if you want loader on every page load
};

