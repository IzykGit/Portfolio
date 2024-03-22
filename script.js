
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




// randomly changes the navigation link rotation from left to right

const navLinks = document.querySelectorAll('.navlink')

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        const generateHoverVariable = Math.floor(Math.random() * 2)
        console.log(generateHoverVariable)

        if(generateHoverVariable === 0) {
            link.classList.add('rotate-left')
            console.log(link.classList)
        }
        else if (generateHoverVariable === 1){
            link.classList.add('rotate-right')
            console.log(link.classList)
        }
    })

    link.addEventListener("mouseleave", () => {
        link.classList.remove('rotate-left', 'rotate-right')

        console.log("Mouse left", link.classList)
    })
})





// calculating the scroll distance that allows the scroll percentage to move
// translating the text along the X axis when scrolling

const scrolled = document.querySelector('.scroll-bar');
const scrollPercentText = document.querySelector('.scroll-percent');

let scrollPercentage;

function calculateScrollDistance() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
  
    const totalScrollableDistance = scrollHeight - windowHeight;
    scrollPercentage = (scrollTop / totalScrollableDistance) * 100;

    if(scrollPercentage >= 97) {
        return
    }
    scrolled.style.transform = `translateX(${scrollPercentage.toFixed(2)}%)`
}

window.addEventListener('scroll', calculateScrollDistance);




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





// setting dark mode 


// const darkMode = document.getElementById('dark-mode') 
// const stylesheet = document.getElementById('style')
// let styleState = 1

// darkMode.addEventListener('click', () => {
//     if(styleState === 1) {
//         darkMode.innerHTML = "Light Mode"
//         stylesheet.href = "./styles/home-page/dark.css"
//         styleState = 2
//     }
//     else if (styleState === 2) {
//         darkMode.innerHTML = "Dark Mode"
//         stylesheet.href = "./styles/home-page/light.css"
//         styleState = 1
//     }
// })

