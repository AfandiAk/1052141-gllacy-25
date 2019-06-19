var modal = document.getElementById('feedback_modal');
var ref_btn = document.getElementById('ref_control');
var cls = document.getElementById('close');
var ovrl = document.querySelector('.overlay');

ref_btn.onclick = function () {
    modal.style.display = 'block';
    ovrl.style.display = 'block';
};
cls.onclick = function () {
    modal.style.display = 'none';
    ovrl.style.display = 'none';
};
var doc_body = document.querySelector('body');
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
}
