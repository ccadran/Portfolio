let lastScroll = 0;
const nav = document.querySelector("nav");
console.log(nav);
window.addEventListener("scroll", () => {
    if (btnBurger.classList.contains("active")) {
    } else {
        if (window.scrollY < lastScroll) {
            nav.style.top = 0;
        } else {
            nav.style.top = "-100px";
        }
    }

    lastScroll = window.scrollY;
});

const btnBurger = document.getElementById("btn");
const navUl = document.querySelector(".nav-container ul");
const body = document.querySelector("body");

btnBurger.addEventListener("click", () => {
    btnBurger.classList.toggle("active");
    navUl.classList.toggle("active");
    nav.classList.toggle("active");
    if (btnBurger.classList.contains("active")) {
        console.log(window.scrollY);
        navUl.style.height = window.innerHeight + "px";
        navUl.style.width = window.innerWidth + "px";
        // navUl.style.top = window.scrollY - 10 + "px";
        // console.log(window.scrollY);
        body.style = "overflow:hidden";
    } else {
        body.style = "overflow:scroll";
    }
});

function btnBurgerOnScroll() {
    let lastScroll2 = 0;
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            if (window.scrollY < lastScroll2) {
                console.log(window.scrollY);
                btnBurger.style.top = "30px";
                console.log(lastScroll2);
            } else {
                btnBurger.style.top = "-60px";
            }

            lastScroll2 = window.scrollY;
        }
    });
}
if (innerWidth < 1023) {
    btnBurgerOnScroll();
}
