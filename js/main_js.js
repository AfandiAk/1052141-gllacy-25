var modal = document.querySelector('.feedback_popup_container');
var ref_btn = document.querySelector('.map_btn');
var cls = document.querySelector('.close_btn');
var ovrl = document.querySelector('.overlay');

ref_btn.onclick = function (event) {
    event.preventDefault()
    modal.style.display = 'block';
    ovrl.style.display = 'block';
};
cls.onclick = function (event) {
    event.preventDefault()
    modal.style.display = 'none';
    ovrl.style.display = 'none';
};

/*var doc_body = document.querySelector('body');
var slides = document.querySelectorAll('.slider .slide');
var switchers = document.querySelectorAll('.switch_btn');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 10000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    switchers[currentSlide].className = 'switch_btn';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active_slide';
    doc_body.className = 'body_background' + (currentSlide + 1);
    switchers[currentSlide].className = 'switch_btn active_btn';
}*/
