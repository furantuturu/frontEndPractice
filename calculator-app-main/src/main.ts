import { Calculator } from './calculatorClass.js';

// Elements
const numKeys = document.querySelectorAll(
  '[data-numbers]',
) as NodeListOf<HTMLButtonElement>;
const operationKeys = document.querySelectorAll(
  '[data-operation]',
) as NodeListOf<HTMLButtonElement>;
const equals = document.querySelector('[data-equals]') as HTMLButtonElement;
const del = document.querySelector('[data-delete]') as HTMLButtonElement;
const reset = document.querySelector('[data-reset]') as HTMLButtonElement;
const currentOperant = document.querySelector(
  '[data-curr-oper]',
) as HTMLDivElement;

const calculator = new Calculator(currentOperant);

numKeys.forEach((numKey) => {
  numKey.addEventListener('click', () => {
    calculator.chooseNum(numKey.innerText);
    calculator.display();
  });
});

operationKeys.forEach((operKey) => {
  operKey.addEventListener('click', () => {
    calculator.chooseOperation(operKey.innerText);
    calculator.display();
  });
});

del.addEventListener('click', () => {
  calculator.delete();
  calculator.display();
});

reset.addEventListener('click', () => {
  calculator.reset();
  calculator.display();
});

equals.addEventListener('click', () => {
  calculator.calculate();
  calculator.display();
});
