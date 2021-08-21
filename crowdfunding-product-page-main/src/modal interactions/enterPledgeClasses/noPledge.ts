import { hasInputValue } from './validationAndInterface.js';
import { isNumber } from './validationAndInterface.js';

export class NoPledge implements hasInputValue {
  constructor(private input: HTMLInputElement) {}

  inputVal() {
    if (!isNumber(this.input.valueAsNumber)) {
      alert('Enter a valid amount.\n *Amount must be less than $1000*');
      return (this.input.valueAsNumber = 0);
    }
    return this.input.valueAsNumber;
  }
}
