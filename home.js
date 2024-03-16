
const text = "Looking to make great websites and inovate."

const introDesc = document.querySelector('.intro-description')
const contactBtn = document.querySelector('.contact-button')
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
    const documentHeight = document.documentElement.scrollHeight;
  
    const totalScrollableDistance = documentHeight - windowHeight;
    scrollPercentage = (scrollTop / totalScrollableDistance) * 100;
  
    console.log(`Scrolled: ${scrollPercentage.toFixed(2)}%`);
    console.log(scrollPercentage.toFixed(2))

    if(scrollPercentage >= 97) {
        return
    }
    scrolled.style.transform = `translateX(${scrollPercentage.toFixed(2)}%)`
}

window.addEventListener('scroll', calculateScrollDistance);



