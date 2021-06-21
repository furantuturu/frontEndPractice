console.time('ayaya')

'use strict';

// MENU

const menuBar = document.querySelector('.menu-bar'),
    menuMobileOverlay = document.querySelector('#menu-mobile-container');
let isExpanded = false;

function expand() {
    const menuComponent = [menuBar, menuMobileOverlay]
    menuComponent.forEach(menu => {
        menu.classList.toggle('expand');
    })

    if (!isExpanded) {
        menuBar.innerHTML = '<i class="fas fa-times"></i>'
        isExpanded = !isExpanded;
    } else {
        menuBar.innerHTML = '<i class="fas fa-bars"></i>'
        isExpanded = !isExpanded;
    }
}

menuBar.addEventListener('click', expand);

// EMAIL VALIDATION

const email = document.querySelector('#email'),
    form = document.querySelector('.email-form'),
    inputCont = document.querySelector('.input-container');

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function emailValidation(e) {
    const emailValue = email.value.trim();

    if (emailValue.length <= 0 || !isEmail(emailValue)) {
        e.preventDefault();
        inputCont.classList.add('error');
    }
}

form.addEventListener('submit', emailValidation);

//CLICK AND DRAG FOR TESTIMONIAL SECTION

const slider = document.querySelector('.testimonial-slider'),
    innerSlider = slider.querySelector('.testimonial-container'),
    items = Array.from(innerSlider.querySelectorAll('.testimonial'));

let isGrabbed = false,
    startX,
    x,
    transform = 0, //variable to reference the last transform value
    index = 0,
    direction = true;

// grandparent is supposed to be the slider not parebnt
//position absolute innerSlider
function grabbed(e) {
    isGrabbed = true;
    e.preventDefault();

    this.classList.add('active');
    startX = e.offsetX;

    const lastTransformValue = window.getComputedStyle(innerSlider).getPropertyValue('transform');

    if (lastTransformValue !== 'none') {
        transform = parseInt(lastTransformValue.split(',')[4].trim())
    }
}

function notGrabbed() {
    isGrabbed = false;
    this.classList.remove('active');
}

function grabbing(e) {
    if (!isGrabbed) return;

    x = e.offsetX;
    const walk = (x - startX) * .75;

    innerSlider.style.transform = `translateX(${transform + walk}px)`;

    const currentTranslate = transform + walk;
    if (currentTranslate < -200 || currentTranslate > -1000) {
        boundary(currentTranslate)
    }

    if (index === 0 || index === 3) direction = !direction

    if (direction) {
        updateDot(currentTranslate)
    } else {
        reverseUpdateDot(currentTranslate)
    };
}

function boundary(currentTranslate) {
    const boundaryOffsetWidth = (-innerSlider.offsetWidth) - (-slider.offsetWidth);

    if (currentTranslate > 0) {
        innerSlider.style.transform = `translateX(0px)`
    }

    if (currentTranslate < boundaryOffsetWidth) {
        innerSlider.style.transform = `translateX(${boundaryOffsetWidth}px)`
    }
}

// DOTS FOR INDICATION OF SPECIFIC TESTIMONIAL POSITION

const dotContainer = document.querySelector('.dots'),
    dots = dotContainer.querySelectorAll('.dot');


function updateDot(currentTranslate) {
    dots.forEach(dot => dot.classList.remove('active'))


    if (index === 3) {
        dots[3].classList.add('active');
        return index;
    }

    dots[index].classList.add('active')

    let offsetleft = Math.round((items[index + 1].offsetLeft / 1.4) * -1);
    console.log(offsetleft, currentTranslate)
    if (currentTranslate <= offsetleft) {
        index += 1;
    }
}

function reverseUpdateDot(currentTranslate) {
    dots.forEach(dot => dot.classList.remove('active'))

    if (index === 0) {
        dots[0].classList.add('active');
        return index;
    }

    dots[index].classList.add('active')

    let offsetleft = Math.round((items[index - 1].offsetLeft / 1.4) * -1);
    console.log(offsetleft, currentTranslate)
    if (currentTranslate >= offsetleft) {
        index -= 1;
    }
}
slider.addEventListener('pointerdown', grabbed);
slider.addEventListener('pointerup', notGrabbed);
slider.addEventListener('pointerleave', notGrabbed);
slider.addEventListener('pointermove', grabbing);

console.timeEnd('ayaya')