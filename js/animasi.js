let isOpen = false;

$("#Burger").on("click", function () {
  if (!isOpen) {
    $("#Menu").addClass("active");
    $("#Overlay").fadeIn();
    isOpen = true;
  } else {
    closeMenu();
  }
});

$("#Overlay").on("click", closeMenu);

function closeMenu() {
  $("#Menu").removeClass("active");
  $("#Overlay").fadeOut();
  isOpen = false;
}

$("#Menu a").on("click", closeMenu);