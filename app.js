console.log('Hello World')
let slidePosition = 0;
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;
const next = document.getElementById('next').addEventListener("click", () => {
    moveToNextSlide();
})
document.getElementById('prev').addEventListener("click", () => {
    moveToPrevSlide();
})
const updateSlidePosition = () => {
    for (let slide of slides) {
        console.log(slide);
        slide.classList.remove('slide--visible');
        slide.classList.add('slide--hidden');
    }
    slides[slidePosition].classList.remove('slide--hidden');
    slides[slidePosition].classList.add('slide--visible');
}
const moveToNextSlide = () => {
    updateSlidePosition();
    if(slidePosition === totalSlides -1) {
        slidePosition = 0;
    }
    else {
        slidePosition++;
    }
    updateSlidePosition();
}
const moveToPrevSlide = () => {
    updateSlidePosition();
    if(slidePosition === 0) {
        slidePosition = 0;
    }
    else {
        slidePosition--;
    }
}
//hamburger
const hamburger = document.querySelector(".hamburger");
const topNav = document.querySelector("#nav-ul");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    topNav.classList.toggle("active");
})
document.querySelectorAll(".nav-links").forEach(n => n.addEventListener)

const $card = document.querySelector('.card_inner');
$card.addEventListener('click', () => {
    $card.classList.toggle('is-flipped');
})
