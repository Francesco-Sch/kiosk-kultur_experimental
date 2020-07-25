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

    
    // Switches direction of the mouseover-div, depending on which side of the screen the mouse is
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

document.body.addEventListener('mousemove', moveDiv)


// Show image inside the mouseover-div on text hover
// and change the color of the image links
const imageLinks = document.querySelectorAll('.show-image');
const text = document.getElementsByTagName('main');
const root = location.protocol + '//' + location.host;
const mq = window.matchMedia( "(max-width: 768px)" )

// Function to show the image
function showPicture(item) {
    item.style.zIndex = '5';
    mouseOver.style.backgroundImage = `url('${'.' + item.dataset.image}')`;
    mouseOver.classList.add("show");
    item.style.color = 'white'
    text[0].style.color = '#262626'
}

// Function to hide the image
function hidePicture(item) {
    item.style.zIndex = 'auto';
    mouseOver.style.backgroundImage = 'none';
    mouseOver.classList.remove("show");
    mouseOver.classList.remove("zoom-in");
    item.style.color = '#262626'
    text[0].style.color = 'white'
}

//Function to zoom into picture for mobile
function zoomPicture(item) {
    item.classList.add("zoom-in");
}

// Checks if the user is on mobile or not
// -- Mobile & Tablet
if(mq.matches) {

    document.body.addEventListener('click', (event) => {
        let clickedOutside = true;

        console.log(event.composedPath())
        
        // Checks if a word is tapped
        event.composedPath().forEach( (item) => {
            if(!clickedOutside) {
                return
            }

            // Makes image visible on tap 
            if(item.className === 'show-image') {
                clickedOutside = false;
                showPicture(item)

                document.body.removeEventListener('mousemove', moveDiv)
            }

            // Sets image to fullscreen
            if(item.className === 'mouseover show') {
                clickedOutside = false;
                zoomPicture(item)
                console.log(document.getElementsByTagName('html'))
                document.getElementsByTagName('html')[0].style.overflowY = 'hidden';
            }
        });

        // Hide image on tap outside of the image
        if(clickedOutside) {
            imageLinks.forEach ( (item) => {
                hidePicture(item)

                document.body.addEventListener('mousemove', moveDiv)
                document.getElementsByTagName('html')[0].style.overflowY = 'auto';
            })
        }
    })

// -- Desktop
} else {

    // Shows images on hover over text
    imageLinks.forEach( (item) => {
        item.addEventListener('mouseenter', () => {showPicture(item)}),
        item.addEventListener('mouseleave', () => {hidePicture(item)})
    })

}
