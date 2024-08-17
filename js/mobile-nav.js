const mobileNav = document.getElementById("mobile-navigation");
const header = document.getElementById("header-main");

const navOpenButton = document.getElementById("open-nav-button");

let navigationCloseTimeout;

navOpenButton.addEventListener("click", () => {
if(navigationCloseTimeout){
  clearTimeout(navigationCloseTimeout);
  navigationCloseTimeout = null;
}

  if (mobileNav.classList.contains("open")) {
    document.body.style.overflow = 'auto';
    navigationCloseTimeout = setTimeout(() => {
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
