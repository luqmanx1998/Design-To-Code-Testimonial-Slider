const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');

let curSlide = 0;
const maxSlide = slides.length - 1; 

const slideScroll = function(slide) {
    slides.forEach((s, i) => 
        s.style.transform = `translateX(${100 * (i - slide)}%)`
    );
};

// Initialize with first slide
slideScroll(0);

const nextSlide = function() {
    if (curSlide === maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    slideScroll(curSlide);
};

const prevSlide = function() {
    if (curSlide === 0) {
        curSlide = maxSlide;
    } else {
        curSlide--;
    }
    slideScroll(curSlide);
};

btnLeft.addEventListener('click', prevSlide);
btnRight.addEventListener('click', nextSlide);
document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
        prevSlide();
    }
    e.key === 'ArrowRight' && nextSlide();
});