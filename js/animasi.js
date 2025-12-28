 const burger = document.getElementById("Burger");
const menu = document.getElementById("Menu");
const overlay = document.getElementById("Overlay");

let isOpen = false;

burger.addEventListener("click", () => {
  if (!isOpen) {
    menu.classList.add("active");
    overlay.style.display = "block";
    isOpen = true;
  } else {
    closeMenu();
  }
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
  menu.classList.remove("active");
  overlay.style.display = "none";
  isOpen = false;
}

/* tutup saat klik item menu */
document.querySelectorAll("#Menu a").forEach(link => {
  link.addEventListener("click", closeMenu);
});
