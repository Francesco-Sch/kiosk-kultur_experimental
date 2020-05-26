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

// Show image on text hover
let imageLinks = document.querySelectorAll('.show-image');
let images = document.querySelectorAll('.tag-image');

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
