// acces html elements
const sliderRow = document.querySelector('.slider-row');
const slides = document.getElementsByClassName('slider');
const dots = document.getElementsByClassName('dot');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// declare variables

let index = 1;

width = slides[0].clientWidth; //882px

sliderRow.style.transform = 'translateX('+ (- width * index) + 'px)';

//next slide

nextBtn.addEventListener('click', nextSlide);

function nextSlide(){
    if(index >= slides.length - 1 ){
        return
    }
    sliderRow.style.transition = 'transform 0.4s ease-out';
    index++;
    sliderRow.style.transform = 'translateX('+ (- width * index) + 'px)';

}

// prev slide
prevBtn.addEventListener('click', prevSlide);
function prevSlide(){
    if(index <= 0 ){
        return
    }
    sliderRow.style.transition = 'transform 0.4s ease-out';
    index--;
    sliderRow.style.transform = 'translateX('+ (- width * index) + 'px)';
}




sliderRow.addEventListener('transitionend', function(){
    if(slides[index].id==='firstImgDoublicate') {
        sliderRow.style.transition = 'none';
        index = slides.length - index;
        sliderRow.style.transform = 'translateX('+ (- width * index) + 'px)';
    }

    if(slides[index].id==='lastImgDoublecate') {
        sliderRow.style.transition = 'none';
        index = slides.length - 2;
        sliderRow.style.transform = 'translateX('+ (- width * index) + 'px)';
    }

});

// auto slide
function autoslide(){
    deleteInterval = setInterval(timer, 1000);

    function timer(){
        nextSlide();
    }
}
autoslide();

