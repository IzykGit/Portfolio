const greetText = "Welcome to my portfolio!"
let index = 0;

const typingContainer = document.getElementById("typing-container");

function typeEffect() {
    if(index < greetText.length) {
        typingContainer.innerHTML += greetText.charAt(index);
        index++;
        setTimeout(typeEffect, 100)
    }
}

console.log(typeEffect())