// Typing Animation
const text = ["Frontend Developer", "Web Designer", "JavaScript Programmer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingElement = document.querySelector(".typing");

function typeEffect(){
    if(index >= text.length) index = 0;

    currentText = text[index];

    if(!isDeleting){
        typingElement.textContent = currentText.substring(0,charIndex++);
        if(charIndex > currentText.length){
            isDeleting = true;
            setTimeout(typeEffect,1000);
            return;
        }
    }else{
        typingElement.textContent = currentText.substring(0,charIndex--);
        if(charIndex < 0){
            isDeleting = false;
            index++;
        }
    }
    setTimeout(typeEffect,100);
}

typeEffect();

// Scroll Animation
const sections = document.querySelectorAll(".hidden");

window.addEventListener("scroll",()=>{
    sections.forEach(sec=>{
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.classList.add("show");
        }
    });
});