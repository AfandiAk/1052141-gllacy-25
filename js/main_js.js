var modal = document.querySelector('.feedback_popup_container');
var ref_btn = document.querySelector('.map_btn');
var cls = document.querySelector('.close_btn');
var ovrl = document.querySelector('.overlay');
var form = document.querySelector('.feedback_form');
var usr_name = form.querySelector('.login');
var email = form.querySelector('.email');
var message = form.querySelector('.message');

ref_btn.onclick = function (event) {
    event.preventDefault();
    modal.style.display = 'block';
    ovrl.style.display = 'block';
};
cls.onclick = function (event) {
    event.preventDefault();
    modal.style.display = 'none';
    ovrl.style.display = 'none';
};

form.addEventListener('submit', function (event) {
    if (!message.value) {
        event.preventDefault();
        message.focus();
        message.classList.add('attention');
    }
    if (!email.value) {
        event.preventDefault();
        email.focus();
        email.classList.add('attention');
    }
    if (!usr_name.value) {
        event.preventDefault();
        usr_name.focus();
        usr_name.classList.add('attention');
    }
});

usr_name.addEventListener('blur', function (event) {
    usr_name.classList.remove('attention');
});

email.addEventListener('blur', function (event) {
    email.classList.remove('attention');
});

message.addEventListener('blur', function (event) {
    message.classList.remove('attention');
});

var doc_body = document.querySelector('body');
var slides = document.querySelectorAll('.slider .slide');
var switchers = document.querySelectorAll('.switch_btn');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 20000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    switchers[currentSlide].className = 'switch_btn';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active_slide';
    doc_body.className = 'body_background' + (currentSlide + 1);
    switchers[currentSlide].className = 'switch_btn active_btn';
}
