const fixedHeader = document.getElementById('header-main');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        fixedHeader.classList.add("header--background");
    } else {
        fixedHeader.classList.remove("header--background");
    }
});
