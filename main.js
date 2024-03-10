
let proj = document.getElementById("projects");
let tag = document.getElementById("tag");
let res = document.getElementById("resume");
let con = document.getElementById("contact");
let feat = document.getElementById("featured");
document.getElementById("pButton").addEventListener(
    "click",
    () => {
        if(proj.hidden === true) {
            proj.hidden = false;
            tag.hidden = true;
            res.hidden = true;
            con.hidden = true;
            feat.hidden = true;
        } else if(proj.hidden === false) {
            proj.hidden = true;
            tag.hidden = false;
        }
    },
    false,
);
document.getElementById("rButton").addEventListener(
    "click",
    () => {
        if(res.hidden === true) {
            res.hidden = false;
            tag.hidden = true;
            con.hidden = true;
            proj.hidden = true;
        } else if(res.hidden === false) {
            res.hidden = true;
            tag.hidden = false;
        }
    },
    false,
);


document.getElementById("cButton").addEventListener(
    "click",
    () => {
        if(con.hidden === true) {
            con.hidden = false;
            tag.hidden = true;
            proj.hidden = true;
            res.hidden = true;
            feat.hidden = true;
        } else if(con.hidden === false) {
            con.hidden = true;
            tag.hidden = false;
        }
    },
    false,
);

const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 4;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
});

