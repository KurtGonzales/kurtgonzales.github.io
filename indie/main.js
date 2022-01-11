// Responsive Navigation
const nav = document.getElementById("nav-links");
const btn = document.getElementById("hamburger");

btn.addEventListener("click", function () {
  nav.classList.toggle("show-nav");
});

