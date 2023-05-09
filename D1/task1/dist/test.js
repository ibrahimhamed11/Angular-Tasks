"use strict";
var first;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference() {
        return 2 * (this.width + this.height);
    }
    static WhoAmI() {
        console.log("I am rectangle");
    }
}
class square extends Rectangle {
    constructor(width) {
        super(width, width);
        this.width = width;
    }
    CalcCircumference() {
        return 4 * (this.width + this.height);
    }
    static WhoAmI() {
        console.log("I am square");
    }
}
const rectangle = new Rectangle(10, 10);
console.log(rectangle);
const squar = new square(10);
console.log(squar);
