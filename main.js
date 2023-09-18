let menuIcon = document.querySelector("header i");
let linksMobile = document.querySelector(".links.mobile");
let closeBtn = document.querySelector(".links.mobile i");
let overlay = document.querySelector('.overlay');


menuIcon.addEventListener('click', function () {
    linksMobile.style.right = '0px';
    overlay.style.display = 'block';
    overlay.style.height = `${document.documentElement.scrollHeight}px`;
});

closeBtn.addEventListener('click', function () {
    linksMobile.style.right = '-250px';
    overlay.style.display = 'none';
});