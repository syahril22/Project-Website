// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humbergur menu di klik
document.querySelector("#humburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const humbergur = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!humbergur.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
