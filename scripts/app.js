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
const mouseOver = document.querySelector('#mouseover');

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

imageLinks.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            
        }),
        item.addEventListener('mouseout', () => {
            
        })
    }
)
