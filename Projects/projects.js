//--------------TITLE EFFECT

const tiltEffectSettings = {
    max: 15, // max tilt rotation (degrees (deg))
    perspective: 2000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
    scale: 1.05, // transform scale - 2 = 200%, 1.5 = 150%, etc..
    speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
    easing: "cubic-bezier(.03,.98,.52,.99)", // easing (transition-timing-function) of the enter/exit transition
};

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
    project.addEventListener("mouseenter", projectMouseEnter);
    project.addEventListener("mousemove", projectMouseMove);
    project.addEventListener("mouseleave", projectMouseLeave);
});

function projectMouseEnter(event) {
    setTransition(event);
}

function projectMouseMove(event) {
    const project = event.currentTarget;
    const projectWidth = project.offsetWidth;
    const projectHeight = project.offsetHeight;
    const boundingRect = project.getBoundingClientRect();
    const centerX = boundingRect.left + projectWidth / 2;
    const centerY = boundingRect.top + projectHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped =
        (+1 * tiltEffectSettings.max * mouseY) / (projectHeight / 2);
    const rotateYUncapped =
        (-1 * tiltEffectSettings.max * mouseX) / (projectWidth / 2);
    const rotateX =
        rotateXUncapped < -tiltEffectSettings.max
            ? -tiltEffectSettings.max
            : rotateXUncapped > tiltEffectSettings.max
            ? tiltEffectSettings.max
            : rotateXUncapped;
    const rotateY =
        rotateYUncapped < -tiltEffectSettings.max
            ? -tiltEffectSettings.max
            : rotateYUncapped > tiltEffectSettings.max
            ? tiltEffectSettings.max
            : rotateYUncapped;

    project.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)
                            scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}

function projectMouseLeave(event) {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
}

function setTransition(event) {
    const project = event.currentTarget;
    clearTimeout(project.transitionTimeoutId);
    project.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    project.transitionTimeoutId = setTimeout(() => {
        project.style.transition = "";
    }, tiltEffectSettings.speed);
}

// ------------Hover anim txt

projects.forEach((project) => {
    project.addEventListener("mouseenter", textAppears);
    project.addEventListener("mouseleave", textDisapears);
});
function textAppears(event) {
    const project = event.currentTarget;
    const h3 = project.querySelector("h3");
    const btn = project.querySelector(".view-project");
    const content = project.querySelector(".left");
    const h4 = project.querySelector("h4");
    content.style.justifyContent = "space-between";
    h4.style.marginTop = 0;
    h3.style.display = "flex";
    btn.style.display = "flex";
}
function textDisapears(event) {
    const project = event.currentTarget;
    const h3 = project.querySelector("h3");
    const btn = project.querySelector(".view-project");
    const content = project.querySelector(".left");
    const h4 = project.querySelector("h4");
    content.style.justifyContent = "";
    h4.style.marginTop = 0;
    h3.style.display = "none";
    btn.style.display = "none";
}

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
