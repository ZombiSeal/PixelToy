let menuBtn = document.querySelector('.burger-icon');
let menu = document.querySelector('.nav__right');
let body = document.querySelector('html');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('burger-icon_active');
	menu.classList.toggle('nav__right_active');
    body.classList.toggle('body_menu');
});

let links = document.querySelectorAll(".nav__link");
links.forEach(link => {
    link.addEventListener("click", function(){
        menuBtn.classList.remove('burger-icon_active');
        menu.classList.remove('nav__right_active');
        body.classList.remove('body_menu');

    })
});