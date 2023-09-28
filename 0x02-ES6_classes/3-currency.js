export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(nCode) {
    this._code = nCode;
  }

  get name() {
    return this._name;
  }

  set name(nName) {
    this._name = nName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
