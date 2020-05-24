/* ----- Resizes headline equally to the parent div ----- */
fitty('#main-headline');

/* ----- Activates bottom gradient after scroll ----- */
let bottomGradient = document.querySelector('.bottom-gradient');
let activePoint = bottomGradient.clientHeight;

function activatesGradient() {
    if(window.scrollY >= activePoint) {
        bottomGradient.style.opacity = '1'
    } else {
        bottomGradient.style.opacity = '0'
    }
}

window.addEventListener('scroll', activatesGradient);