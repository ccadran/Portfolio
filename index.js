const skillsContainers = document.querySelectorAll(".skills-container");
const btnBurger = document.getElementById("btn");
const navUl = document.querySelector(".nav-container ul");
const body = document.querySelector("body");
const mouses = document.querySelectorAll(".mouse");
const burgerChilds = document.querySelectorAll(".burger-child");

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
function blackImg() {
  if (window.matchMedia("(min-width: 968px)").matches) {
    const projects = document.querySelectorAll(".project");
    Array.prototype.forEach.call(projects, (project) => {
      const img = project.querySelector("img");
      img.style.filter = "grayscale(100%)";
      project.addEventListener("mouseenter", () => {
        project.style.scale = "1.1";
        img.style.filter = "grayscale(0%)";
      });
      project.addEventListener("mouseleave", () => {
        project.style.scale = "1";
        img.style.filter = "grayscale(100%)";
      });
    });
  } else {
    const imgs = document.querySelectorAll(".project img");
    Array.prototype.forEach.call(imgs, (img) => {
      img.style.filter = "grayscale(0%)";
    });
  }
}
blackImg();
window.addEventListener("resize", blackImg);
// if (innerWidth > 1023) {
//     blackImg();
//     console.log("test img");
// }
btnBurger.addEventListener("click", () => {
  btnBurger.classList.toggle("active");
  navUl.classList.toggle("active");
  nav.classList.toggle("active");
  if (btnBurger.classList.contains("active")) {
    navUl.style.height = window.innerHeight + "px";
    navUl.style.width = window.innerWidth + "px";

    body.style = "overflow:hidden";
  } else {
    body.style = "overflow:scroll";
  }
});
burgerChilds.forEach((child) => {
  if (
    child.addEventListener("click", () => {
      btnBurger.classList.remove("active");
      navUl.classList.remove("active");
      nav.classList.remove("active");
    })
  );
});

function btnBurgerOnScroll() {
  let lastScroll2 = 0;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      if (window.scrollY < lastScroll2) {
        btnBurger.style.top = "30px";
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
