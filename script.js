// MENU MOBILE

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("nav ul");

if (toggle && menu) {
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
}


// ANIMAÇÃO DOS CARDS AO ROLAR A PÁGINA

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

cards.forEach(card => observer.observe(card));