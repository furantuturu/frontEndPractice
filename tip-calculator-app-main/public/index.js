"use strict";
const inputs = document.querySelectorAll('input');
let billVal = parseFloat(inputs[0].value.trim()), personAmount = parseFloat(inputs[2].value.trim());
const customTipInput = document.querySelector('#custom-tip');
const tipBtn = document.querySelectorAll('.tip_btn');
const tipAmount = document.querySelector('.amount1');
const total = document.querySelector('.amount2');
let target;
const resetBtn = document.querySelector('.reset-btn');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        billVal = parseFloat(inputs[0].value.trim());
        personAmount = parseFloat(inputs[2].value.trim());
        if (billVal == 0 || personAmount == 0) {
            alert('Value of 0 is not allowed');
        }
        if (target != undefined) {
            targetValue(billVal, personAmount, target);
        }
    });
});
tipBtn.forEach((tip) => {
    tip.addEventListener('click', (e) => {
        tipBtn.forEach((tip) => tip.classList.remove('active'));
        target = e.target; // convert e.target from Event.target type to Element type
        // const target = e.target as HTMLElement; other method
        targetValue(billVal, personAmount, target);
    });
});
customTipInput?.addEventListener('input', () => {
    customTipInput.dataset.val = customTipInput.value.trim();
    const customTipVal = parseFloat(customTipInput.dataset.val) / 100;
    calculateTip(billVal, personAmount, customTipVal);
});
const targetValue = (billVal, personAmount, target) => {
    target.classList.add('active');
    if (target.classList.contains('active')) {
        const tipDataVal = target.dataset.val;
        const value = parseFloat(tipDataVal);
        calculateTip(billVal, personAmount, value);
    }
};
const calculateTip = (billVal, personAmount, val) => {
    tipAmount.textContent = `$${((billVal * val) / personAmount).toFixed(2)}`;
    total.textContent = `$${(((billVal * val) + billVal) / personAmount).toFixed(2)}`;
};
resetBtn?.addEventListener('click', () => {
    inputs.forEach(input => input.value = '10');
});
