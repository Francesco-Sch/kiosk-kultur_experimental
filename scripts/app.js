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
const windowWidth = window.innerWidth;

function moveDiv(event) {
    let x = event.pageX;
    let y = event.pageY;

    if(x <= windowWidth/2) {
        mouseOver.style.right = '';
        mouseOver.style.left = x + 'px';
        mouseOver.style.top = y + 'px';
        mouseOver.style.transform = 'translate(-10%, -10%)';
    } else {
        mouseOver.style.left = '';
        mouseOver.style.right = windowWidth - x + 'px';
        mouseOver.style.top = y + 'px';
        mouseOver.style.transform = 'translate(10%, -10%)';
    }

}


document.body.addEventListener('mousemove', () => {
    moveDiv(event);
})

// Switches direction of the mouseover-div, depending on which side of the screen the mouse is



// Show image inside the mouseover-div on text hover
// and change the color of the image links
const imageLinks = document.querySelectorAll('.show-image');
const text = document.getElementsByTagName('main');
const root = location.protocol + '//' + location.host;

console.log(text)

imageLinks.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            item.style.zIndex = '5';
            mouseOver.style.backgroundImage = `url(${root + item.dataset.image})`;
            mouseOver.classList.add("show");
            item.style.color = 'white'
            text[0].style.color = '#262626'
        }),
        item.addEventListener('mouseleave', () => {
            item.style.zIndex = 'auto';
            mouseOver.style.backgroundImage = 'none';
            mouseOver.classList.remove("show");
            item.style.color = '#262626'
            text[0].style.color = 'white'
        })
    }
)
