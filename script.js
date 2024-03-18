
const text = "Looking to make great websites and inovate."

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

const scrollableDiv = document.querySelector('.all-content')
const scrolled = document.querySelector('.scroll-bar');
const scrollPercentText = document.querySelector('.scroll-percent');

let scrollPercentage;

function calculateScrollDistance() {
    const scrollTop = scrollableDiv.scrollTop;
    const divHeight = scrollableDiv.clientHeight;
    const scrollHeight = scrollableDiv.scrollHeight;
  
    const totalScrollableDistance = scrollHeight - divHeight;
    scrollPercentage = (scrollTop / totalScrollableDistance) * 100;
  
    console.log(`Scrolled: ${scrollPercentage.toFixed(2)}%`);
    console.log(scrollPercentage.toFixed(2))

    if(scrollPercentage >= 97) {
        return
    }
    scrolled.style.transform = `translateX(${scrollPercentage.toFixed(2)}%)`
}

window.addEventListener('scroll', calculateScrollDistance);



// setting dark mode 


const darkMode = document.getElementById('dark-mode') 
const stylesheet = document.getElementById('style')
let styleState = 1

darkMode.addEventListener('click', () => {
    if(styleState === 1) {
        darkMode.innerHTML = "Light Mode"
        stylesheet.href = "dark.css"
        styleState = 2
    }
    else if (styleState === 2) {
        darkMode.innerHTML = "Dark Mode"
        stylesheet.href = "light.css"
        styleState = 1
    }
})


