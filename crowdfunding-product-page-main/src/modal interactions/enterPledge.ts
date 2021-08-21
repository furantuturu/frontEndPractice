import { BambooPledge } from './enterPledgeClasses/bambooPledge.js';
import { BlackStandPledge } from './enterPledgeClasses/blackStandPledge.js';
import { NoPledge } from './enterPledgeClasses/noPledge.js';

const successModal = document.querySelector('.success_modal') as HTMLDivElement;
const successModalBtn = successModal.querySelector('button')!;

const forms = document.querySelectorAll('form')!;
const pledgeInputs = Array.from(
  document.querySelectorAll('input[type=number]'),
) as Array<HTMLInputElement>;
const [noPledge, bambooPledge, blackStandPledge] = pledgeInputs;

const backedAmount = document.querySelector(
  '.backed-amount',
) as HTMLHeadingElement;
const backedAmountProgressBar = document.querySelector(
  '#backing_revenue',
) as HTMLProgressElement;
const backers = document.querySelector('.backers') as HTMLHeadingElement;
let backersValue: number = parseInt(backers.dataset.val!);

let finalPledgevalue: number;

forms.forEach((form: HTMLFormElement) => {
  form.addEventListener('submit', (e: Event): number => {
    e.preventDefault();

    if (radios[0].checked) {
      finalPledgevalue = new NoPledge(noPledge).inputVal();
    } else if (radios[1].checked) {
      finalPledgevalue = new BambooPledge(bambooPledge).inputVal();
    } else if (radios[2].checked) {
      finalPledgevalue = new BlackStandPledge(blackStandPledge).inputVal();
    }

    form.reset();
    successModal.style.display = 'flex';
    return finalPledgevalue;
  });
});

successModalBtn.addEventListener('click', () => {
  successModal.style.display = 'none';
  modal.style.display = 'none';

  backedAmountProgressBar.value += finalPledgevalue;
  backedAmount.textContent = `$${backedAmountProgressBar.value
    .toString()
    .slice(0, 2)},${backedAmountProgressBar.value.toString().slice(2)}`;

  backers.textContent = `${(backersValue++)
    .toString()
    .slice(0, 1)},${(backersValue++).toString().slice(1)}`;
});
