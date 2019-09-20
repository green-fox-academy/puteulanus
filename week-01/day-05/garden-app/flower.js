'use strict';

const Plant = require('./plant')

class Flower extends Plant {
    constructor(color, waterContent = 0) {
        super(color, 0.75, 5, waterContent);
    }
}

module.exports = Flower;