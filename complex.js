var Complex = /** @class */ (function () {
    function Complex(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    Complex.prototype.add = function (obj) {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary);
    };
    Complex.prototype.subtract = function (obj) {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary);
    };
    Complex.prototype.modulo = function () {
        return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
    };
    Complex.prototype.to_string = function () {
        if (this.imaginary > 0) {
            return this.real + " + " + this.imaginary + "i";
        }
        else {
            return this.real + " " + this.imaginary + "i";
        }
    };
    return Complex;
}());
var number1 = new Complex(3, 4);
var number2 = new Complex(2, 5);
var add = number1.add(number2);
console.log('Dodawanie: ' + add.to_string());
var divide = number1.subtract(number2);
console.log('Odejmowanie: ' + divide.to_string());
var modulo = divide.modulo();
console.log('Modulo: ' + modulo);
