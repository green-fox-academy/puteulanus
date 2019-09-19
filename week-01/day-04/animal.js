'use strict';

class Animal {
    constructor() {
        this.hunger = 50;
        this.thirst = 50;
    }

    eat() {
        this.hunger -= 1;
    }

    drink() {
        this.thirst -=1;
    }

    play() {
        this.hunger += 1;
        this.thirst += 1;
    }
}

module.exports = Animal;