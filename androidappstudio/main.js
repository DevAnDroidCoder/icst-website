// Make sure appDescription doesn't hide behind toolbar because of fixed position of toolbar.
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.getElementById("navbar");
  const appDescription = document.getElementById("app_description");
  const navbarHeight = navbar.offsetHeight;
  appDescription.style.paddingTop = `${navbarHeight}px`;
});
