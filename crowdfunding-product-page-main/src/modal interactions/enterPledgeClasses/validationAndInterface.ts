export function isNumber(value: any): boolean {
  return /^\d{1,3}$/.test(value);
}

export interface hasInputValue {
  inputVal(): any;
}
