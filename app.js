console.log('Hello World')
const slides = document.querySelectorAll('.slides');
const slideNumber = 0
slideshow();
const slideshow = (slides) => {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideNumber++;
    if(slideNumber > slides.length) {
        slideNumber = 1
    }
    slides[slideNumber-1].style.display = "block";
    setTimeout(slideshow, 1500);
    
}