const annualCost = ['199.99', '249.99', '399.99'];
const monthlyCost = ['19.99', '24.99', '39.99'];


const elem = {
    pricesCont: document.querySelectorAll('.subscription .price'),
    prices: document.querySelectorAll('.subscription .price b'),
    toggle: document.querySelector('input[type=checkbox]'),
    togglePricing: function(e) {

        if (elem.toggle.checked === true || e.keyCode == 37) {
            elem.toggle.checked = true;
            for (let i = 0; i < elem.prices.length; i++) {
                // add slide-in-left class and remove slide-in-right class
                elem.pricesCont[i].classList.remove('slide-in-left')
                elem.pricesCont[i].classList.add('slide-in-right')

                // change cost to annual
                elem.prices[i].textContent = annualCost[i]
            }
        }
        if (elem.toggle.checked === false || e.keyCode == 39) {
            elem.toggle.checked = false;
            for (let i = 0; i < elem.prices.length; i++) {
                elem.pricesCont[i].classList.remove('slide-in-right')
                elem.pricesCont[i].classList.add('slide-in-left')

                elem.prices[i].textContent = monthlyCost[i]
            }
        }

    }
}

elem.toggle.addEventListener('click', elem.togglePricing);
window.addEventListener('keydown', elem.togglePricing)