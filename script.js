//Toggle class active
const Nav = document.querySelector ('.Navigation');
// ketika hamburger menu di klik
document.querySelector ('#hamburger-menu').onclick = (e) => {
    Nav.classList.toggle('active');
    e.preventDefault();
};

const searchForm = document.querySelector('.Search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#Search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

//klik luar side bar hilangkan menu
const hm = document.querySelector ('#hamburger-menu');
const sb = document.querySelector('#Search-button');
document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !Nav.contains(e.target)) {
        Nav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !Nav.contains(e.target)) {
        searchForm.classList.remove('active');
    }
});

function go(dir) {
if (!playing) {
playing = true;
if (current + dir <0) current = images.length - 1;
else if (current + dir >= images. Length) current = 0;
else current += dir;

function up(part, next) { 
part.appendChild(next);
gsap.to (part, {...animOptions, y: -window.innerHeight}).then(function () {
part.children[0].remove();
gsap.to (part, {duration: 0, y: 0});
})
}

function down(part, next) {
part.prepend(next);
gsap.to (part, {duration: 0, y: -window.innerHeight});
gsap.to (part, {...animoptions, y: 0}).then(function () {
part.children[1].remove();
playing = false;
})
}
}

for (let p in parts) {
let part = parts[p];
let next = document.createElement('div');
next.className = 'section';
let img = document.createElement('img');
img.src= images[current];
next.appendChild(img);
let current = 0;
let playing = false;
}

for (let col = 0; col < cols; col++) {
    let part = document.createElement('div');
    part.className = 'part';
    let el = document.createElement('div');
    el.className = 'section';
    let img = document.createElement('img');
    img.src = images[current];
    el.appendChild(img);
    part.style.setProperty('--x', -100/cols*col+'vw');
    part.appendChild(el);
    main.appendChild(part);
    parts.push (part);
}

let animOptions = {
    duration: 2.3,
    ease: Power4.easeInOut
};
}