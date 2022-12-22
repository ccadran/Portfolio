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
