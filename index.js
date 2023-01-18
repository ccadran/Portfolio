const skillsContainers = document.querySelectorAll(".skills-container");
const btnBurger = document.getElementById("btn");
const navUl = document.querySelector(".nav-container ul");
const body = document.querySelector("body");
function skillsHover() {
    Array.prototype.forEach.call(skillsContainers, (container) => {
        container.addEventListener("mouseenter", () => {
            console.log("testtt");
            const logoSkills = container.querySelectorAll(".logo-skills");
            Array.prototype.forEach.call(logoSkills, (logo) => {
                logo.style.display = "flex";
            });
            const title = container.querySelector("p");
            title.style.top = "30px";
        });
        container.addEventListener("mouseleave", () => {
            const logoSkills = container.querySelectorAll(".logo-skills");
            Array.prototype.forEach.call(logoSkills, (logo) => {
                logo.style.display = "none";
            });
            const title = container.querySelector("p");
            title.style.top = "";
        });
    });
}
skillsHover();

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

const project = document.querySelectorAll(".project ");
Array.prototype.forEach.call(project, (project) => {
    console.log(project);

    project.addEventListener("mouseenter", () => {
        project.style.scale = "1.1";
        const imgs = project.querySelectorAll("img");
        Array.prototype.forEach.call(imgs, (img) => {
            img.style.filter = "grayscale(0%)";
        });
    });
    project.addEventListener("mouseleave", () => {
        project.style.scale = "1";
        const imgs = project.querySelectorAll("img");
        Array.prototype.forEach.call(imgs, (img) => {
            img.style.filter = "grayscale(100%)";
        });
    });
});

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
