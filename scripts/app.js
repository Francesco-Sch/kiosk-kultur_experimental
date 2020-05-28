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
const images = document.querySelectorAll('.tag-image');

console.log(images)

imageLinks.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            if(item.childElementCount == images[index].childElementCount) {
                images[index].classList.add('show');
            } else {
                console.log('error')
            }
        }),
        item.addEventListener('mouseout', () => {
            if(item.childElementCount == images[index].childElementCount) {
                images[index].classList.remove('show');
            } else {
                console.log('error')
            }
        })
    }
)
