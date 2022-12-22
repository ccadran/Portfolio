const skillsContainers = document.querySelectorAll(".skills-container");

function skillsHover() {
    Array.prototype.forEach.call(skillsContainers, (container) => {
        container.addEventListener("mouseenter", () => {
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
    if (window.scrollY < lastScroll) {
        console.log("test1");
        nav.style.top = 0;
    } else {
        nav.style.top = "-100px";
    }

    lastScroll = window.scrollY;
});
