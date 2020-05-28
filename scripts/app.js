// Activates bottom gradient after scroll 
let bottomGradient = document.querySelector('.bottom-gradient');
let activePoint = bottomGradient.clientHeight;

window.addEventListener('scroll', () => {
    if(window.scrollY >= activePoint) {
        bottomGradient.style.opacity = '1'
    } else {
        bottomGradient.style.opacity = '0'
    }
})

// Attach mouseover-div to the mouse position
const mouseOver = document.querySelector('.mouseover');

function moveDiv(event) {
    let x = event.pageX;
    let y = event.pageY;

    mouseOver.style.left = x  + 'px';
    mouseOver.style.top = y + 'px';
}

document.body.addEventListener('mousemove', () => {
    moveDiv(event);
})


// Show image inside the mouseover-div on text hover
const imageLinks = document.querySelectorAll('.show-image');
const root = location.protocol + '//' + location.host;

console.log(imageLinks);

imageLinks.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            mouseOver.style.backgroundImage = `url(${root + item.dataset.image})`;
            mouseOver.classList.add("show");
        }),
        item.addEventListener('mouseout', () => {
            mouseOver.style.backgroundImage = 'none';
            mouseOver.classList.remove("show");
        })
    }
)
