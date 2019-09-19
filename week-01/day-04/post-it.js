'use strict';

class Postit {
    constructor(backgroundColor, text, textColor) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let a = new Postit('orange', 'Idea 1', 'blue');
let b = new Postit('pink', 'Awesome', 'black');
let c = new Postit('yellow', 'Superb!', 'green');

console.log(a, b, c);