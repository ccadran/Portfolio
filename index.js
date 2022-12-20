const skillsContainers = document.querySelectorAll(".skills-container");

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
