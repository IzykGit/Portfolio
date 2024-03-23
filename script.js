
const text = "Looking to make great websites and innovate."

const introDesc = document.querySelector('.intro-description')
const contactBtn = document.querySelector('.hide-contact')
let index = 0;
const typingSpeed = 40
const startDelay = 850

function typeEffect() {
    if(index < text.length) {
        introDesc.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed)
    }
    else if (index = text.length) {
        contactBtn.classList.remove('hide-contact')
        contactBtn.classList.add('contact-button')
    }
}

setTimeout(typeEffect, startDelay)




const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementById('nav-links')

const ham1 = document.querySelector('.ham-1')
const ham2 = document.querySelector('.ham-2')
const ham3 = document.querySelector('.ham-3')


hamburgerMenu.addEventListener('click', () => {

        nav.classList.toggle('nav-cover')
        nav.classList.toggle('nav-links')
        console.log(nav.classList)

        ham1.classList.toggle('ham-1-tilt')
        ham2.classList.toggle('ham-2-tilt')
        ham3.classList.toggle('ham-3-tilt')
        
})


