const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".site-header nav");

// open / close the menu when the ☰ button is tapped
menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

// close the menu after tapping a link
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});