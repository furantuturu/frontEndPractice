interface CalcMethods {
  reset(): void;
  delete(): void;
  chooseNum(num: string): void;
  chooseOperation(oper: string): void;
  calculate(): void;
  localeString(value: string): string;
  display(): void;
}

export class Calculator implements CalcMethods {
  // properties to store values and selected operation
  private pastVal!: string;
  private presentVal!: string;
  private operation!: string | undefined;
  constructor(private currOperant: HTMLDivElement) {
    this.reset();
  }
  reset() {
    this.pastVal = '';
    this.presentVal = '';
    this.operation = undefined;
  }
  delete() {
    this.presentVal = this.presentVal.slice(0, -1);
  }
  chooseNum(number: string) {
    if (number === '.' && this.presentVal.includes('.')) return;
    this.presentVal = this.presentVal + number;
  }
  chooseOperation(operation: string) {
    if (this.presentVal == '') return;
    if (this.pastVal != null) {
      this.calculate();
    }
    this.operation = operation;
    this.pastVal = this.presentVal;
    this.presentVal = '';
  }
  calculate() {
    let calculation: number;
    const firstVal: number = parseFloat(this.pastVal);
    const secondVal: number = parseFloat(this.presentVal);

    if (isNaN(firstVal) || isNaN(secondVal)) return;

    switch (this.operation) {
      case '+':
        calculation = firstVal + secondVal;
        break;
      case '-':
        calculation = firstVal - secondVal;
        break;
      case 'x':
        calculation = firstVal * secondVal;
        break;
      case '/':
        calculation = firstVal / secondVal;
        break;
      default:
        return;
    }

    this.presentVal = calculation.toString();
    this.pastVal = '';
    this.operation = undefined;
  }
  localeString(calculatedValue: string): string {
    // ex value: 1234.567
    const integerVal: number = parseFloat(calculatedValue.split('.')[0]);
    // integerVal is going to be 1234 in type number
    const decimalVal: string = calculatedValue.split('.')[1];
    // decimalVal is going to be 567 in type string

    let finalIntegerVal: string;
    if (isNaN(integerVal)) {
      finalIntegerVal = '';
    } else {
      finalIntegerVal = integerVal.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }

    if (decimalVal != null) {
      return `${finalIntegerVal}.${decimalVal}`;
    } else {
      return finalIntegerVal;
    }
  }
  display() {
    this.currOperant.textContent = `${this.localeString(this.pastVal)} ${
      this.operation || ''
    } ${this.localeString(this.presentVal)}`;
  }
}
