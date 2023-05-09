"use strict";
class genn {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        return this.items[this.items.length - 1];
    }
    size() {
        return this.items.length;
    }
    isEmpty() {
        return this.items.length === 0;
    }
}
const gen = new genn;
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(5);
gen.push(7);
console.log(gen.pop());
console.log(gen);
for (var i = 0; i < gen.items.length; i++) {
    console.log(gen.items[i]);
}
