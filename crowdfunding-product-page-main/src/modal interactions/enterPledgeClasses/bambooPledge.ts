import { hasInputValue } from './validationAndInterface.js';
import { isNumber } from './validationAndInterface.js';

export class BambooPledge implements hasInputValue {
  constructor(private input: HTMLInputElement) {}

  inputVal() {
    if (this.input.valueAsNumber < 25 || !isNumber(this.input.valueAsNumber)) {
      alert(
        'Enter a valid amount.\n *Amount must be less than $1000 or amount must be more than $25*',
      );
      return (this.input.valueAsNumber = 0);
    }
    return this.input.valueAsNumber;
  }
}
