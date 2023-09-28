export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(nBrand) {
    this._brand = nBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(nMotor) {
    this._motor = nMotor;
  }

  get color() {
    return this._color;
  }

  set color(nColor) {
    this._color = nColor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
