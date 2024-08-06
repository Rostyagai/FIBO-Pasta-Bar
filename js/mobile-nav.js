const mobileNav = document.getElementById("mobile-navigation");
const header = document.getElementById("header-main");

const navOpenButton = document.getElementById("open-nav-button");

navOpenButton.addEventListener("click", () => {
  if (mobileNav.classList.contains("open")) {
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      mobileNav.style.visibility = "hidden";
    }, 700);
  } else {
    mobileNav.style.visibility = "visible";
    document.body.style.overflow = 'hidden';
  }
  navOpenButton.classList.toggle("is-active");
  mobileNav.classList.toggle("open");
  header.classList.toggle("mobile-nav-open");
});
