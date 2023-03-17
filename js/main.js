const css = document.getElementById('css');
const tags = document.getElementById('tags');
const html = document.getElementById('html');
const xd = document.getElementById('xd');
const js = document.getElementById('js');
const wp = document.getElementById('wp');
const memoji = document.getElementById("memoji");
const greyRect = document.getElementById("grey-rect");
const greyRect2 = document.getElementById("grey-rect2");
// let heroText = document.getElementsByClassName("hero-text");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    css.style.marginLeft = value * -0.5 + 'px';

    tags.style.marginLeft = value * -1.5 + 'px';

    memoji.style.marginTop = value * -1.5 + 'px';

    html.style.marginTop = value * -0.5 + 'px';
    html.style.marginRight = value * -0.5 + 'px';

    xd.style.marginRight = value * -0.5 + 'px';

    js.style.marginRight = value * -1 + 'px';

    wp.style.marginTop = value * -1.5 + 'px';
    wp.style.marginRight = value * -0.5 + 'px';

    greyRect.style.rotate = value * 0.07 + 'deg';
    greyRect2.style.rotate = value * 0.09 + 'deg';
});

ScrollReveal().reveal(".skill-card, #about", { delay: 200, easing: "ease-out", interval: 200, scale: 1.2 });


const rect1 = document.getElementById("rect-1")
