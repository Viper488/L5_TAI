"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    }
    subtract(obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    }
    modulo() {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    }
    to_string() {
        if (this.imaginary > 0) {
            return this.real + " + " + this.imaginary + "i";
        }
        else {
            return this.real + " " + this.imaginary + "i";
        }
    }
}
var number1 = new Complex(3, 4);
var number2 = new Complex(2, 5);
var add = number1.add(number2);
console.log('Dodawanie: ' + add.to_string());
var divide = number1.subtract(number2);
console.log('Odejmowanie: ' + divide.to_string());
var modulo = divide.modulo();
console.log('Modulo: ' + modulo);
