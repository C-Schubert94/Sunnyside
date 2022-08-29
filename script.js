const menuBtn = document.querySelector('.hamburger-btn');
const navList = document.querySelector('.link-container');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        navList.classList.add('open');
        menuOpen = true;
    } else {
        navList.classList.remove('open');
        menuOpen = false;
    }
});