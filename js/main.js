// const css = document.getElementById("css");
// const tags = document.getElementById("tags");
// const html = document.getElementById("html");
// const xd = document.getElementById("xd");
// const js = document.getElementById("js");
// const wp = document.getElementById("wp");
// const memoji = document.getElementById("memoji");
const greyRect = document.getElementById("grey-rect");
const greyRect2 = document.getElementById("grey-rect2");
const greyRect3 = document.getElementById("grey-rect3");
const greyRect4 = document.getElementById("grey-rect4");
// let heroText = document.getElementsByClassName("hero-text");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  greyRect.style.rotate = value * 0.07 + "deg";
  greyRect2.style.rotate = value * 0.09 + "deg";
  greyRect3.style.rotate = value * 0.11 + "deg";
  greyRect4.style.rotate = value * 0.13 + "deg";
});

ScrollReveal().reveal(".skill-card, #about,.img,.grey-rect", {
  delay: 200,
  easing: "ease-out",
  interval: 200,
  scale: 1.2,
});

const hMenu = document.getElementById("hMenu");
const nav = document.querySelector(".nav");
// const menu = document.querySelector(".menu");

hMenu.onclick = function () {
  nav.classList.toggle("active");
};
