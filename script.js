const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
const yearEl = document.getElementById("year");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
