console.time('ayaya')

const
    slider = document.querySelector('#slider');
toggle = document.querySelector('#toggle');
price = document.querySelector('.amount');

/* flag/s */
let isPressed = false;

/* functions */
function updatePrice() {
    price.textContent = `$${this.value}.00`;
}

function notPressed() {
    isPressed = false;
    this.style.cursor = 'pointer';
}

function yearlyBilling() {
    const minYearly = 10 * 10,
        maxYearly = 32 * 10,
        valueYearly = slider.value * 10;
    switch (this.checked) {
        case true:
            slider.max = Math.floor((maxYearly) - ((maxYearly) * .25))
            slider.min = Math.floor((minYearly) - ((minYearly) * .25))
            slider.value = Math.floor((valueYearly) - ((valueYearly) * .25))
            price.textContent = `$${slider.value}.00`;
            break;
        case false:
            slider.max = 32;
            slider.min = 10;
            slider.value = 16;
            price.textContent = `$${slider.value}.00`;
            break;
    }

}
/* listeners */

/* slider */
slider.addEventListener('pointerdown', function() {
    isPressed = true;
    this.style.cursor = 'grab';
    this.addEventListener('pointermove', updatePrice)
})
slider.addEventListener('pointerup', notPressed)

/* toggle */
toggle.addEventListener('click', yearlyBilling)

/* window */
window.addEventListener('load', function() {
    slider.value = 16;
    toggle.checked = false;
})

console.timeEnd('ayaya')